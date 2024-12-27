import React from 'react';
import styles from '../style/modal.module.css'; // 스타일 정의

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null; // 모달이 닫힌 상태라면 아무것도 렌더링하지 않음

    return (
        <div
            className={styles.modal_backdrop}
            onClick={closeModal}
            role='presentation' // 스크린 리더 접근성을 위한 속성
        >
            <div
                className={styles.modal_content}
                onClick={(e) => e.stopPropagation()} // 내부 클릭 시 모달 닫히지 않도록 이벤트 중단
                role='dialog' // 스크린 리더 접근성을 위한 속성
                aria-modal='true' // 접근성을 위한 속성
            >
                <button
                    className={styles.modal_close}
                    onClick={closeModal}
                    aria-label='Close Modal' // 스크린 리더를 위한 설명
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
