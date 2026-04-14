/*
Anything that starts with 'use' is a hook in react.

Remember: 
-Hook should be used on the top of the function only.
-It cannot be used in if block , for block, nested functions
-Hooks can't be used after early return
-It can't be used in event handler, callbacks or any other helper function

*/
import { useState } from "react";
function Hooks(){
    return (
        <>
            <InvalidHooks />
        </>
    )
}
export default Hooks;
function InvalidHooks(){
    const [count,setCount] = useState(0);
    function HandleClick(){
        setCount(count+1);
        console.log(count);
    }
    return (
        <div>
            <button onClick={HandleClick} >Click me {count}</button>
        </div>
    )
    // const isLoggedIn = true;
    // if(isLoggedIn){
        // setCount can't be used here as it may cause infinite renders:  setCount queues re-render which may cause infinite loops
        // setCount(count + 1);
        // console.log(count);
    // }

}