// 유저 정보 표시
import React from 'react';
import { token } from '../apis/Token'; // 토큰 유틸리티 가져오기
import { logout } from '../apis/LogOut';


function UserStatus() {
  return (
            <>
                {token && 
                    <div className='gf_userState'>
                        <div>
                            환영합니다. 관리자님 
                            <button className="gf_logoutBtn" onClick={logout}>로그아웃</button>
                        </div>
                    </div>
                }
            </>
    );
}


export default UserStatus;