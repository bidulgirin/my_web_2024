//import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
// css
import "./style/common.css";
import Header from './components/Header.js';
import Admin from './components/Admin.js';
import Contents from './components/Contents.js';



function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Contents/>} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
