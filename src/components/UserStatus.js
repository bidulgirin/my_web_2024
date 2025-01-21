// 유저 정보 표시
import React from 'react';
import { token } from '../apis/Token'; // 토큰 유틸리티 가져오기
import LoginController from '../hooks/LoginController';

function UserStatus() {
    const { onLogout } = LoginController();
    return (
        <>
            {token && (
                <div className='gf_fixed gf_userState'>
                    <div>
                        환영합니다
                        <br />
                        관리자님
                        <br />
                        <button className='gf_logoutBtn' onClick={onLogout}>
                            로그아웃
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserStatus;
