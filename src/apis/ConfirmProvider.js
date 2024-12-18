import React, { createContext, useContext, useState } from "react";

// ConfirmContext 생성
const ConfirmContext = createContext();

// ConfirmProvider 정의
export const ConfirmProvider = ({ children }) => {
  const [confirmState, setConfirmState] = useState({
    isOpen: false,
    message: "",
    onConfirm: () => {},
    onCancel: () => {},
  });

  // Confirm 열기 함수
  const openConfirm = ({ message, onConfirm, onCancel }) => {
    setConfirmState({
      isOpen: true,
      message,
      onConfirm: () => {
        onConfirm();
        closeConfirm();
      },
      onCancel: () => {
        if (onCancel) onCancel();
        closeConfirm();
      },
    });
  };

  // Confirm 닫기 함수
  const closeConfirm = () => {
    setConfirmState((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  };

  return (
    <div value={openConfirm}>
      {children}
      {confirmState.isOpen && (
        <ConfirmModal
          message={confirmState.message}
          onConfirm={confirmState.onConfirm}
          onCancel={confirmState.onCancel}
        />
      )}
    </div>
  );
};

// ConfirmModal 컴포넌트
const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <p>{message}</p>
        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            onClick={onConfirm}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            확인
          </button>
          <button
            onClick={onCancel}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
};
