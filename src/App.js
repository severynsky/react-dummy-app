import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home';
import UserPage from './components/UserPage';
import NavBar from './components/NavBar';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/users/:id" component={UserPage}/>
          <Route path="/contant" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
