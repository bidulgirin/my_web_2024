import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js'; // Example component
import Navi from './components/Navi.js'; // Example component

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navi.js" element={<Navi />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
