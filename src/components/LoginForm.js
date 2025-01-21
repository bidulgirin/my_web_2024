import React, { useState } from 'react';

const LoginForm = ({ onLogin = () => {} }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <div>
                <input
                    className='gf_input'
                    type='email'
                    placeholder='이메일'
                    value={email}
                    onKeyDown={(e) => {
                        if (e.key == 'Enter') onLogin(email, password);
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    className='gf_input'
                    type='password'
                    placeholder='비밀번호'
                    value={password}
                    onKeyDown={(e) => {
                        if (e.key == 'Enter') onLogin(email, password);
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                />
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
