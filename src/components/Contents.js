// 컨텐츠
import React from 'react';
import Project from './Project';
import About from './About';
import { token } from '../apis/Token';
import HandleProject from './HandleProject';
import Main from './Main';
import ContactForm from './ContactFrom';
import UserStatus from './UserStatus';

function Contents() {
    return (
        <section>
            <div className={`gf_fixed gf_userState`}>
                <UserStatus />
            </div>
            <section>
                <Main />
            </section>
            <section>
                <About />
                <Project />
                <ContactForm />
            </section>

            <button className='gf_button gf_button_normal'>일반</button>
            <button className='gf_button gf_button_warning'>위기!</button>
            <button className='gf_button gf_button_success gf_button_large'>
                크다
            </button>
        </section>
    );
}

export default Contents;
