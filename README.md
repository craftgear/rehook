# rehook
React Hooks wrapper, keeps functions pure

## Usage
```
import React, { useState } from 'react';
import rehook from './rehook';

const Counter = ({ count, setCount }) => {
  return (
    <>
      <div>count is {count}</div>
      <button onClick={() => setCount(count + 1)}>Count Up</button>
    </>
  );
};

export default rehook([{ hook: useState, name: 'count', init: 0 }])(Counter);
```
