import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {

  const userList = props.users.map( user => {
    return (<li key={user.email} ><Link to={`users/${user.id}`} > { user.email } </Link></li>)
  });

  return(
    <ul className='user-list-wrapper'>
      { userList }
    </ul>
  )
}

export default ListItem;
