import React from "react";
import warningIcon from "../../src/assets/images/ic_warning.png"; // 이미지 추가
import "../../src/assets/css/warningbox.css";

const WarningBox = () => {
    return (
        <div className="warning-box">
            <div className="warning-header">
                <img src={warningIcon} alt="경고 아이콘" className="warning-icon" />
                <p className="warning-text">요약글을 작성하실 때 주의해주시기 바랍니다.</p>
            </div>
            <ul className="warning-list">
                <li>타인의 권리를 침해하거나 불쾌감을 주는 글 금지</li>
                <li>욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용 금지</li>
                <li>스포일러 포함 시 반드시 버튼을 눌러주세요</li>
                <li>홍보 및 광고행위 금지</li>
            </ul>
            <p className="community-text">
                요약러리는 누구나 자유롭게 요약글을 작성할 수 있는 커뮤니티를 만들기 위해 이용규칙을 제정하여 운영하고 있습니다.
            </p>
        </div>
    );
};

export default WarningBox;
