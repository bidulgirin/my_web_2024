// 공통 헤더 작성
import React, { useEffect, useRef, useState } from 'react';
import Navi from './Navi';
import { Link } from 'react-router-dom';
import ToggleDarkMode from './ToggleDarkMode';

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
            <Link to='/' className='gf_title gf_logo'>
                <img src='' alt='...' />
            </Link>
            <Navi />
            <ToggleDarkMode />
        </div>
    );
}

export default Header;
