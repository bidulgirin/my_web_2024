// 공통 헤더 작성
import React from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동을 위한 링크 추가

function Home() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>
                <h1>My Website</h1>
            </div>
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/about" style={styles.link}>About</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
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

export default Home;
