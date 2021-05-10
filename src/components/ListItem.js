import React, { memo } from 'react';

const ListItem = ({ user }) => {
  console.log('user: ', user);
  return <li>{user.name}</li>;
};

export default memo(ListItem);
