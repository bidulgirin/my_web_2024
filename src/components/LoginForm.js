import React, { useState } from 'react';
import styles from '../style/admin.module.css';
const LoginForm = ({ onLogin = () => {} }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className={styles.lf_login_form}>
            <div className='gf_input__box'>
                <input
                    className={`${styles.lf_admin_input} gf_input`}
                    type='email'
                    placeholder='email'
                    name='email'
                    value={email}
                    onKeyDown={(e) => {
                        if (e.key == 'Enter') onLogin(email, password);
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='email' className='gf_input_label'>
                    email
                </label>
            </div>
            <div className='gf_input__box'>
                <input
                    className={`${styles.lf_admin_input} gf_input`}
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onKeyDown={(e) => {
                        if (e.key == 'Enter') onLogin(email, password);
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor='password' className='gf_input_label'>
                    password
                </label>
            </div>
            <button
                className={`gf_btn gf_btn_normal`}
                type='button'
                onClick={() => {
                    onLogin(email, password);
                }}
            >
                확인
            </button>
        </div>
    );
};

export default LoginForm;
