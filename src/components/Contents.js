// 컨텐츠
import React from 'react';
import Project from './Project';
import About from './About';
import { token } from '../apis/Token';
import CreateProject from './CreateProject';
import Main from './Main';

function Contents() {

    return (
        <section>
            <section>
                <Main/>
            </section>
            <section className="gf_contentArea">
                <About/>
                <Project/>
                {token && 
                    <>
                        <CreateProject/>
                    </>
                }
            </section>
        </section>
    );
}

export default Contents;
