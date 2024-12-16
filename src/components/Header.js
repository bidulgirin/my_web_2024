// 공통 헤더 작성
import React from 'react';
import Navi from './Navi';

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>logo</div>
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
