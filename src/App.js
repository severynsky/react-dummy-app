import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home';
import UserPage from './components/UserPage';
import './App.css';
import logo from './logo.svg';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route exact path="/" component={Home}/>
          <Route path="/users/:userId" component={UserPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
