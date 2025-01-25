import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2'; 
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Fast Website Test</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>  
              <li><Link to="/page1">Page 1</Link></li>
              <li><Link to="/page2">Page 2</Link></li>
              <li><Link to="/page3">Page 3</Link></li>
              <li><Link to="/page4">Page 4</Link></li>
              <li><Link to="/page5">Page 5</Link></li>
              <li><Link to="/page6">Page 6</Link></li>
              <li><Link to="/page7">Page 7</Link></li>
              <li><Link to="/page8">Page 8</Link></li>
            </ul>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} /> 
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} /> 
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
        </Routes>
        
        <footer>
          <p>&copy; 2023 Fast Website Test</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
