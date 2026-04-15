/*
Anything that starts with 'use' is a hook in react.

Remember: 
-Hook should be used on the top of the function only.
-It cannot be used in if block , for block, nested functions
-Hooks can't be used after early return
-It can't be used in event handler, callbacks or any other helper function

*/

/*
    React render: render means just to call Js functions to return JSX template
    React maintain Hook order list: to maintain order of hooks,
    Imp: It track each component hooks, if number of hooks per component differs than it give error but if number of hooks per component remains same than react is happy.

    It didn't care about number of components - Just number of hooks inside Component remains same.

*/

/*
Never change state while render - It will cause Infinite calling
useEffect without dependency array may cause infinite calling
useEffect with state that changes frequently
object as dependency inside function cause infinite render as react take that object as reference not by value so each render the object is different, sol: Move them outside component or use useMemo();
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
}
    // const isLoggedIn = true;
    // if(isLoggedIn){
        // setCount can't be used here as it may cause infinite renders:  setCount queues re-render which may cause infinite loops
        // setCount(count + 1);
        // console.log(count);
    // }
