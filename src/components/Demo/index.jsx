import { useState, useEffect, useRef, Fragment } from 'react';

export default function Demo() {
  const [count, setCount] = useState(0);

  function add() {
    // setCount(count + 1);
    setCount((count) => count + 1);
  }

  useEffect(() => {
    console.log('hi');

    return () => {
      console.log('component will unmount');
    };
  }, [count]);

  const inputText = useRef();

  function showInputText() {
    alert(inputText.current.value);
  }

  return (
    <Fragment>
      <h2>sum: {count}</h2>
      <button onClick={add}>+1</button>
      <br />
      <br />
      <input type="text" ref={inputText} />
      <button onClick={showInputText}>文字內容</button>
    </Fragment>
  );
}
