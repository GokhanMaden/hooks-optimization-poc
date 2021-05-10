import React, { memo, useEffect } from 'react';
import { getUserInfo } from '../store/actions';
import { useDispatch } from 'react-redux';

import ListItem from './ListItem';

const List = ({ userList }) => {
  console.log('userList: ', userList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  });
  return (
    <ul>
      {userList.map((user) => {
        return <ListItem key={user.id} user={user} />;
      })}
    </ul>
  );
};

export default memo(List);
