// 유저 정보 표시
import React from 'react';
import supabase from '../apis/supabase'; // supabase.js 가져오기
import { getToken, removeToken } from '../apis/Token'; // 토큰 유틸리티 가져오기
import { logout } from '../apis/LogOut';


function UserStatus() {
  const token = getToken();
  return (
          <>
            {token && <p>환영합니다. 관리자님 <div onClick={logout}>로그아웃</div></p>}
          </>
          
  );
}


export default UserStatus;