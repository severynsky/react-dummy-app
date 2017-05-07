import React, { Component } from 'react';
import axios from 'axios';

class UserPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      isFetching: true
    };
  }

  componentWillMount() {
    axios('https://jsonplaceholder.typicode.com/users/' + window.location.pathname.slice(7))
      .then( response => {
        this.setState({
          user: response.data,
          isFetching: false
        })
    });
  }

  render() {
    const { isFetching, user} = this.state;
    console.log(this.state.user);
    return(
      <div className="user-page">
        {
          isFetching && (<p>fetching data..</p>)
        }
        <div className="user-card">
          <h3>{ user.name}</h3>
          <hr />
          <p>email: <b>{ user.email}</b></p>
          <p>phone no: <b>{ user.phone }</b></p>
        </div>
      </div>
    )
  }
}

export default UserPage;
