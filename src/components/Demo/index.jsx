import { useState } from 'react';

export default function Demo() {
  const [count, setCount] = useState(0);

  function add() {
    // setCount(count + 1);
    setCount((count) => count + 1);
  }

  return (
    <div>
      <h2>sum: {count}</h2>
      <button onClick={add}>+1</button>
    </div>
  );
}
