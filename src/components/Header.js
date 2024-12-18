// 공통 헤더 작성
import React from 'react';
import Navi from './Navi';
import supabase from '../apis/supabase'; // supabase.js 가져오기
import { getToken, removeToken } from '../apis/Token'; // 토큰 유틸리티 가져오기
import UserStatus from '../apis/userStatus';
import { Link } from 'react-router-dom';

function Header() {
    const token = getToken();
    return (
        <header style={styles.header}>
            <Link to="/" style={styles.logo}>기깔나는로고</Link>
            <UserStatus/>
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
