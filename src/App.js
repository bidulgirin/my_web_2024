//import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// css
import './style/common.css';
import Header from './components/Header.js';
import Admin from './components/Admin.js';
import Contents from './components/Contents.js';
function App() {
    return (
        <main>
            <Router basename={process.env.PUBLIC_URL}>
                <div className='App'>
                    <Header />
                    <div>
                        <Routes>
                            <Route path='/' element={<Contents />} />
                            <Route path='/admin' element={<Admin />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </main>
    );
}

export default App;
