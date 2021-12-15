import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Home from './component/home';
import fred from './component/';
import Simon from './component/';
import Emma from './component/';
import mwan-lou from './component/';
import  from './component/';
import  from './component/';
import './App.css';
 
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/"></Link>
              </li>
              <li>
                <Link to="/"></Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;