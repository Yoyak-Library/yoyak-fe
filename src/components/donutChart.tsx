import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "../../src/assets/css/donutChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  labels: string[];
  values: number[];
  colors: string[];
  centerLabel?: string;
}

const DonutChart: React.FC<DonutChartProps> = ({
  labels,
  values,
  colors,
  centerLabel,
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 10,
        borderColor: "#fff",
        borderRadius: 13,
        hoverOffset: 0,
        hoverBorderColor: "transparent",
        hoverBorderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "60%",
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
        external: function (context: any) {
          const tooltipModel = context.tooltip;
          const chartCanvas = context.chart.canvas;
          const chartParent = chartCanvas.parentNode as HTMLElement;

          let tooltipEl = chartParent.querySelector("#custom-tooltip") as HTMLDivElement;
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "custom-tooltip";
            tooltipEl.className = "custom-chart-tooltip";
            chartParent.appendChild(tooltipEl);
          }

          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = "0";
            return;
          }

          const data = tooltipModel.dataPoints?.[0];
          if (data) {
            const genre = data.label;
            const value = data.formattedValue;

            tooltipEl.innerHTML = `
              <div class="tooltip-box">
                <div class="tooltip-text">${genre}</div>
                <div class="tooltip-value">${value}%</div>
              </div>
              <div class="tooltip-tail"></div>
            `;
          }

          tooltipEl.style.opacity = "1";
          tooltipEl.style.left = `${tooltipModel.caretX - 32}px`;
          tooltipEl.style.top = `${tooltipModel.caretY - 70}px`;
          tooltipEl.style.pointerEvents = "none";
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Doughnut data={data} options={options} />
      {centerLabel && (
        <div className="chart-center-label">{centerLabel}</div>
      )}
    </div>
  );
};

export default DonutChart;
