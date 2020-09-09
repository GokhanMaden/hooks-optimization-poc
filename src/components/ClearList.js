import React, {memo} from 'react';

const ClearList = ({handleClear}) => {
  console.log('Clear List Component')
  return <button onClick={handleClear}>Clear List!</button>
}

export default memo(ClearList);