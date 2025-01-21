// 컨텐츠
import React, { useRef, useEffect } from 'react';
import ProjectContainer from './ProjectContainer';
import About from './About';
import Main from './Main';
import ContactForm from './ContactFrom';
import UserStatus from './UserStatus';
import Buttons from './Buttons';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import LocomotiveScroll from 'locomotive-scroll';

function Contents() {
    const containerRef = useRef(null);
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            smartphone: { smooth: true },
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    return (
        <LocomotiveScrollProvider containerRef={containerRef}>
            <section
                className='has-scroll-smooth'
                data-scroll-container
                ref={containerRef}
            >
                <UserStatus />
                <Main />
                <About />
                <ProjectContainer />
                <ContactForm />
                <Buttons />
            </section>
        </LocomotiveScrollProvider>
    );
}

export default Contents;
