// 공통 네비게이션 작성
import React from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동을 위한 링크 추가

function Navi() {
    return (
            <nav style={styles.nav}>
                <Link to="/" style={styles.link}>home</Link>
                <Link to="/contact" style={styles.link}>Contact</Link>
            </nav>
    );
}

const styles = {
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

export default Navi;
