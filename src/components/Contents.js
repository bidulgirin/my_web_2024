// 컨텐츠
import React from 'react';
import ProjectContainer from './ProjectContainer';
import About from './About';
import Main from './Main';
import ContactForm from './ContactFrom';
import ToyProjectContainer from './ToyProject/ToyProjectContainer';

function Contents() {
    return (
        <section>
            <Main />
            <About />
            <ProjectContainer />
            <ToyProjectContainer />
            <ContactForm />
        </section>
    );
}

export default Contents;
