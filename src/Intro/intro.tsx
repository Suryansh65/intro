import { useState } from "react";

export function MyButton(){
  // Setting states for the count
  const [count, setCount] = useState(0);
  // Event Handler
  function handleClick(){
    setCount(count + 1);
  }
  return (
    /*There is No need to call eventHanlder method, react will automatically call the event handler*/
    <button onClick={handleClick} >I'm a clicked {count} times</button>
  );
}

export default function MyApp(){
  return (
    <div>
      {/* <h1>Welcome to my App</h1> */}
      <MyButton/>
    </div>
  )
}