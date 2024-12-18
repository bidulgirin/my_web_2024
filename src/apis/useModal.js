import { useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    // 모달 열기
    const openModal = () => {
        setIsOpen(true);
    };

    // 모달 닫기
    const closeModal = () => {
        setIsOpen(false);
    };

    // 상태 및 함수 반환
    return {
        isOpen, // 모달 상태
        openModal, // 모달 열기 함수
        closeModal, // 모달 닫기 함수
    };
};

export default useModal;
