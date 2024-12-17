// 컨텐츠
import React from 'react';
import Project from './Project';
import About from './About';
import { getToken } from '../apis/Token';
import CreateProject from './CreateProject';

function Home() {
    const token = getToken();
    return (
        <>
            <About/>
            <Project/>

            {token && 
                <>
                    <div>추가</div>
                    <CreateProject/>
                </>
            }
            


        </>
    );
}

export default Home;
