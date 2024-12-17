//import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/Contents.js'; 
import Navi from './components/Navi.js'; 
import Admin from './components/Admin.js';
// css
import "./style/common.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
