import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/menu";
import backArrow from "../../assets/images/back_arrow.png";
import HighlightCard from "../../components/highlightCard";
import "../../assets/css/highlightView.css";

const HighlightView = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="highlightview">
            <Menu />
            <div className="highlightview_container">
                <div className="highlightview_header">
                    <img
                        src={backArrow}
                        alt="뒤로가기"
                        className="highlightview_back-icon"
                        onClick={handleBack}
                    />
                    <h2 className="highlightview_title">하이라이트</h2>
                </div>

                <p className="highlightview_subtitle">제목</p>

                <div className="highlightview_card-container">
                    <div className="highlightview_card-grid">
                        <HighlightCard
                            episode="1화"
                            date="2025.01.04"
                            color="yellow"
                            content="더럽고 우중충한 여인숙이 동은의 집이었다. 하지만 동은이에게는 그것이 유일한 안식처였다."
                        />

                        <HighlightCard
                            episode="1화"
                            date="2025.01.04"
                            color="green"
                            content={`더럽고 우중충한 여인숙이 동은의 집이었다. 하지만 동은이에게는 그것이 유일한 안식처였다. 
                                        악마같은 것들에게서 피할 수 있는 마음을 놓을 수 있는 그런 공간이었다.`}
                        />

                        <HighlightCard
                            episode="1화"
                            date="2025.01.04"
                            color="red"
                            content={`더럽고 우중충한 여인숙이 동은의 집이었다. 하지만 동은이에게는 그것이 유일한 안식처였다. 
                                        악마같은 것들에게서 피할 수 있는 마음을 놓을 수 있는 그런 공간이었다. 
                                        하지만 악마들이 동은의 유일한 안식처에 신발을 신고 들어와 동은의 다리를 고데기로 지졌다. 
                                        악마보다 더한 사회에서 없어져야할 인간보다 못한 사람들이다.`}
                        />

                        <HighlightCard
                            episode="1화"
                            date="2025.01.04"
                            color="yellow"
                            content="더럽고 우중충한 여인숙이 동은의 집이었다. 하지만 동은이에게는 그것이 유일한 안식처였다."
                        />
                        
                        <HighlightCard
                            episode="1화"
                            date="2025.01.04"
                            color="green"
                            content={`더럽고 우중충한 여인숙이 동은의 집이었다. 하지만 동은이에게는 그것이 유일한 안식처였다. 
                                        악마같은 것들에게서 피할 수 있는 마음을 놓을 수 있는 그런 공간이었다.`}
                        />

                        <HighlightCard
                            episode="1화"
                            date="2025.01.04"
                            color="red"
                            content={`더럽고 우중충한 여인숙이 동은의 집이었다. 하지만 동은이에게는 그것이 유일한 안식처였다. 
                                        악마같은 것들에게서 피할 수 있는 마음을 놓을 수 있는 그런 공간이었다. 
                                        하지만 악마들이 동은의 유일한 안식처에 신발을 신고 들어와 동은의 다리를 고데기로 지졌다. 
                                        악마보다 더한 사회에서 없어져야할 인간보다 못한 사람들이다.`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighlightView;
