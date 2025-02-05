import styles from '../style/admin.module.css';
import React, { useState } from 'react';
import { token } from '../apis/Token'; // 토큰 유틸리티 가져오기
import LoginController from '../hooks/LoginController';
import LoginForm from '../components/LoginForm';
import login_main_img from '../img/admin.png';
const LoginContainer = () => {
    const { onLogin } = LoginController();

    return (
        <section className={styles.lf_adminContainer}>
            <div className={styles.lf_adminLayout}>
                <div className={styles.lf_loginArea}>
                    {!token ? (
                        <>
                            <h1 className={`gf_title ${styles.lf_admin_title}`}>
                                관리자 로그인
                            </h1>
                            <div className={styles.lf_login_img}>
                                <img src={login_main_img} alt='' />
                            </div>
                            <LoginForm onLogin={onLogin} />
                        </>
                    ) : (
                        <div>
                            [관리자앱으로 만들것들]
                            <ul>
                                <li>구직중 구직완료 등 상태 변경</li>
                                <li>메세지 보낸것 한번에 보여주기</li>
                                <li>메세지 오면 푸시알람오게하기 </li>
                                <li>메세지 삭제버튼</li>
                                <li>튼</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LoginContainer;
