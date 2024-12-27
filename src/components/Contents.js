// 컨텐츠
import React from 'react';
import Project from './Project';
import About from './About';
import { token } from '../apis/Token';
import CreateProject from './CreateProject';
import Main from './Main';
import ContactForm from './ContactFrom';

function Contents() {
    return (
        <section>
            <section>
                <Main />
            </section>
            <section>
                <About />
                <Project />
                <ContactForm />
            </section>

            <button class='gf_button gf_button_normal'>Normal</button>
            <button class='gf_button gf_button_warning'>Warning</button>
            <button class='gf_button gf_button_success gf_button_large'>
                Success Large
            </button>
        </section>
    );
}

export default Contents;
