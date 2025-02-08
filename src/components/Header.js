// 공통 헤더 작성
import React, { useEffect, useRef, useState } from 'react';
import Navi from './Navi';
import { Link } from 'react-router-dom';
import ToggleDarkMode from './ToggleDarkMode';
import Logo from '../assets/img/logo.png';

function Header() {
    const headerRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={headerRef}
            className={isSticky ? 'gf_header isSticky' : 'gf_header'}
        >
            <Link to='/' className='gf_logo'>
                <img src={Logo} alt='...' />
            </Link>
            <Navi />
            <ToggleDarkMode />
        </div>
    );
}

export default Header;
