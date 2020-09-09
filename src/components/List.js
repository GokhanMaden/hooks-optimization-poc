import React, {memo} from 'react';

import ListItem from './ListItem';

const List = ({userList}) => {
  console.log('Gelen liste: ', userList);
  console.log('List Component')
  return <ul>
    {userList.map(user => {
      return <ListItem key={user.id} user={user}/>
    })}
  </ul>
}

export default memo(List);