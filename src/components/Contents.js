// 컨텐츠
import React from 'react';
import Project from './Project';
import About from './About';
import Main from './Main';
import ContactForm from './ContactFrom';
import UserStatus from './UserStatus';
import Buttons from './Buttons';

function Contents() {
    return (
        <section>
            <UserStatus />
            <Main />
            <About />
            <Project />
            <ContactForm />
            <Buttons />
        </section>
    );
}

export default Contents;
