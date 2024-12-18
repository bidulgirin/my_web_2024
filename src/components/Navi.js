// 공통 네비게이션 작성
import React from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동을 위한 링크 추가
import UserStatus from './UserStatus';

function Navi() {
  return (
            <nav style={styles.navi}>
                <UserStatus/>
                <Link to="/" style={styles.link}>home</Link>
                <Link to="/admin" style={styles.link}>admin</Link>
            </nav>
    );
}

const styles = {
    navi: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
    },
    
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem',
    }
};

export default Navi;
