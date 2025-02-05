// 컨텐츠
import React from 'react';
import ProjectContainer from './ProjectContainer';
import About from './About';
import Main from './Main';
import ContactForm from './ContactFrom';
import UserStatus from './UserStatus';
import Buttons from './Buttons';

function Contents() {
    return (
        <section>
            <Main />
            <About />
            <ProjectContainer />
            <ContactForm />
        </section>
    );
}

export default Contents;
