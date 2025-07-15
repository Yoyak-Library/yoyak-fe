import React from "react";
import "../../src/assets/css/confirmModal.css";

interface ConfirmModalProps {
    message: string;
    onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ message, onConfirm }) => {
    return (
        <div className="custom-modal-overlay">
            <div className="custom-modal-box">
                <h2 className="custom-modal-title">알림</h2>
                <p className="custom-modal-message">{message}</p>
                <div className="custom-modal-buttons">
                    <button className="custom-modal-confirm" onClick={onConfirm}>확인</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;

