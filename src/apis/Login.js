import React, { useState } from 'react';
import supabase from './supabase'; // supabase.js 가져오기
import { token, setToken, removeToken } from '../apis/Token'; // 토큰 유틸리티 가져오기
import styles from '../style/admin.module.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);

    // 로그인 함수
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Supabase의 signIn 메서드를 사용하여 로그인
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setError(error.message);
                setUser(null);
            } else {
                // 로그인 성공 시 JWT 토큰 확인
                console.log('User:', data.user); // 유저 정보
                console.log('Access Token:', data.session.access_token); // 액세스 토큰

                setUser(data.user); // 사용자 정보 저장
                setToken(data.session.access_token); // 토큰 로컬 저장

                window.location.reload();
            }
        } catch (error) {
            setError('로그인 실패: ' + error.message);
            setUser(null);
        }
    };

    return (
        <div className={styles.lf_adminLayout}>
            {!token ? (
                <div className={styles.lf_loginArea}>
                    <h1>로그인</h1>
                    <form onSubmit={handleLogin}>
                        <div className='gf_input'>
                            <input
                                type='email'
                                placeholder='이메일'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='gf_input'>
                            <input
                                type='password'
                                placeholder='비밀번호'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            className={`gf_btn gf_btn_normal ${styles.lf_loginBtn}`}
                            type='submit'
                        >
                            확인
                        </button>
                    </form>
                </div>
            ) : (
                <>어서오시게</>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
