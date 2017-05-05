import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {

  const userList = props.users.map( user => {
    console.info(user);
    return (<Link to={`users/${user.email}`} key={user.email} ><li> { user.email } </li></Link>)
  });

  return(
    <ul className='user-list-wrapper'>
      { userList }
    </ul>
  )
}

export default ListItem;
