// 공통 헤더 작성
import React from 'react';
import Navi from './Navi';
import supabase from '../apis/supabase'; // supabase.js 가져오기
import { getToken, removeToken } from '../apis/Token'; // 토큰 유틸리티 가져오기



// 로그아웃 함수
const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    removeToken();
    alert('로그아웃 되었습니다');
};



function Header() {
    const token = getToken();
    return (
        <header style={styles.header}>
            <div style={styles.logo}>logo</div>
            {token && <p>환영합니다. 관리자님 <div onClick={handleLogOut}>로그아웃</div></p>}
            <Navi/>
        </header>
    );
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#20232a',
        color: 'white'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: 'bold'
    }
};

export default Header;
