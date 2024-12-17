// 공통 네비게이션 작성
import React from 'react';
import { Link } from 'react-router-dom'; // 페이지 이동을 위한 링크 추가
import Login from '../apis/Login';
import Header from './Header';

function Admin() {
    return (
           <>
            <Login/>
           </>
    );
}


export default Admin;
