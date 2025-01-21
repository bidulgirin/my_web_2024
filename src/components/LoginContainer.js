import styles from '../style/admin.module.css';
import React, { useState } from 'react';
import { token } from '../apis/Token'; // 토큰 유틸리티 가져오기
import LoginController from '../hooks/LoginController';
import LoginForm from '../components/LoginForm';

const LoginContainer = () => {
    const { onLogin } = LoginController();

    return (
        <div className={styles.lf_adminLayout}>
            <div className={styles.lf_loginArea}>
                {!token ? (
                    <>
                        <h1>로그인</h1>
                        <LoginForm onLogin={onLogin} />
                    </>
                ) : (
                    <div>어서오세요 </div>
                )}
            </div>
        </div>
    );
};

export default LoginContainer;
