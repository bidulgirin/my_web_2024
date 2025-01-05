// 공통 네비게이션 작성
import React from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동을 위한 링크 추가

function Navi() {
    return (
        <nav className='gf_navi'>
            <Link to='/' className='gf_link'>
                home
            </Link>
            <Link to='/admin' className='gf_link'>
                admin
            </Link>
        </nav>
    );
}

export default Navi;
