import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Home from './components/home/home';
import Fred from './components/fred/fred';
import Simon from './components/simon/simon';
import Alps from './components/simon/pages/alps';
import ScrollToTop from './ScrollToTop';
import Emma from './components/emma/emma';
import Mwan_lou from './components/mwanLou/mwanLou';
import './App.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li className="App-link">
                <Link to="/">Home</Link>
              </li>
              <li className="App-link">
                <Link to="/fred">Fred</Link>
              </li>
              <li className="App-link">
                <Link to="/simon">Simon</Link>
              </li>
              <li className="App-link">
                <Link to="/emma">Emma</Link>
              </li>
              <li className="App-link">
                <Link to="/mwan-lou">Mwan-lou</Link>
              </li>
            </ul>
          <ScrollToTop>
            <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/fred' element={< Fred />}></Route>
                  <Route exact path='/simon' element={< Simon />}></Route>
                  <Route exact path='/simon/alps' element={< Alps />}></Route>
                  <Route exact path='/emma' element={< Emma />}></Route>
                  <Route exact path='/mwan-lou' element={< Mwan_lou />}></Route>
            </Routes>
          </ScrollToTop>
          </div>
       </Router>
   );
  }
}
 
export default App;