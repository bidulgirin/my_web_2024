// 공통 헤더 작성
import React, { useEffect, useRef, useState } from 'react';
import Navi from './Navi';
import { Link } from 'react-router-dom';
import { getToken } from '../apis/Token'; // 토큰 유틸리티 가져오기


function Header() {
    const headerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <div 
            ref={headerRef}
            className={isSticky ? 'gf_header isSticky' : 'gf_header'}
        >
            <Link to="/my_web_2024" style={styles.logo}>기깔나는로고</Link>
            <Navi/>
        </div>
    );
}

const styles = {
    logo: {
        fontWeight: 'bold'
    }
};

export default Header;
