import React from 'react'
import ReactDOM from 'react-dom'
import About from './About.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);
