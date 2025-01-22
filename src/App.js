import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import LocomotiveScroll from 'locomotive-scroll';
import Header from './components/Header.js';
import Admin from './components/Admin.js';
import Contents from './components/Contents.js';

// css
import './style/common.css';
import UserStatus from './components/UserStatus.js';

function App() {
    const containerRef = useRef(null);
    const scrollRef = useRef(null); // LocomotiveScroll 인스턴스를 저장할 Ref

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            smartphone: { smooth: true },
        });
        // ResizeObserver 설정
        const resizeObserver = new ResizeObserver(() => {
            scroll.update(); // 스크롤 업데이트 호출
        });
        if (containerRef.current) {
            resizeObserver.observe(containerRef.current); // 스크롤 컨테이너를 관찰
        }

        // Cleanup 함수
        return () => {
            resizeObserver.disconnect(); // ResizeObserver 정리
            if (scrollRef.current) {
                scrollRef.current.destroy(); // LocomotiveScroll 인스턴스 정리
            }
        };
    }, []);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <LocomotiveScrollProvider containerRef={containerRef} watch={[]}>
                <div className='App'>
                    <Header />
                    <div data-scroll-container ref={containerRef}>
                        <Routes>
                            <Route path='/' element={<Contents />} />
                            <Route path='/admin' element={<Admin />} />
                        </Routes>
                    </div>
                </div>
            </LocomotiveScrollProvider>
            <UserStatus />
        </Router>
    );
}

export default App;
