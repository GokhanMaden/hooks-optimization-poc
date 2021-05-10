import React, { memo } from 'react';

const ClearList = ({ handleClear }) => {
  console.log('handleClear: ', handleClear);
  return <button onClick={handleClear}>Clear List!</button>;
};

export default memo(ClearList);
