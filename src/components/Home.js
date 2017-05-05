import React, { Component } from 'react';
import axios from 'axios';

import ListItem from './ListItem';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      isFetching: true,
    };

  }
  componentWillMount() {
    axios('https://jsonplaceholder.typicode.com/users')
      .then( response => {
        this.setState({
          users: response.data,
          isFetching: false
        })
    });
  }
  render() {
    return(
      <div className="App">

        <button onClick={() => {console.log('hello!')}}> click me!</button>

        {!this.state.isFetching && (<ListItem users={this.state.users}/>)}

      </div>
    )
  }
}

export default Home;
