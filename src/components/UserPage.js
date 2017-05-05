import React, { Component } from 'react';

const UserPage = (props) => {
  console.log(props)
  return(
    <div>
      <h1>Hello world!</h1>
      <h3>{ props.match.params.userId}</h3>
    </div>
  )
}

export default UserPage;
