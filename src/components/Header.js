// 공통 헤더 작성
import React from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동을 위한 링크 추가

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}></div>
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/gf_portfolio" style={styles.link}>About</Link>
                <Link to="/gf_manager" style={styles.link}>관리자페이지</Link>
            </nav>
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
    },
    nav: {
        display: 'flex',
        gap: '1rem'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '1rem'
    }
};

export default Header;
