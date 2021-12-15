import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';
import Fred from './components/fred';
import Simon from './components/simon';
import Emma from './components/emma';
import Mwan_lou from './components/mwan_lou';
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
                <Link to="/fred"></Link>
              </li>
              <li>
                <Link to="/simon"></Link>
              </li>
              <li>
                <Link to="/emma"></Link>
              </li>
              <li>
                <Link to="/mwan-lou"></Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/fred' element={< Fred />}></Route>
                 <Route exact path='/simon' element={< Simon />}></Route>
                 <Route exact path='/emma' element={< Emma />}></Route>
                 <Route exact path='/mwan-lou' element={< Mwan_lou />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;