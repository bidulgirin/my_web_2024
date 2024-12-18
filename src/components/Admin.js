// 공통 네비게이션 작성
import React from 'react';
import Login from '../apis/Login';

function Admin() {
    return (
           <div className='gf_contentArea' style={style.lf_contents}>
                <Login/>
           </div>
    );
}

const style = {
    lf_contents: {
        height: 'clac(100vh)',
    }
}

export default Admin;
