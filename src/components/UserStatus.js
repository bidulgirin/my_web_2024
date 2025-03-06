// 유저 정보 표시
import React from 'react';
import { getExpireTime, token } from '../apis/Token'; // 토큰 유틸리티 가져오기
import LoginController from '../hooks/useLogin';
// import TokenExpirationTimer from './TokenExpirationTimer';

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
                        {/* 토큰만료 의미없음 */}
                        {/* <TokenExpirationTimer
                            expirationTime={getExpireTime()}
                        /> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default UserStatus;
