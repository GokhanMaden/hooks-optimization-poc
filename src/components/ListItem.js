import React, {memo} from 'react';

const ListItem = ({user}) => {
  console.log('gelen user: ', user);
  console.log('List Item Component')
  return <li>{user.name}</li>
}

export default memo(ListItem);