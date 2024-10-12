import React, { useState } from "react";

const FBCStateEx=()=>{
    // let x=React.useState();
    // console.log(x);
    const [intialvalue,setState]=React.useState("neelak");

    let changeName=()=>{
        setState("hardik");
    }

    const[count,setCount]=useState(0);
    let increment=()=>{
        setCount(count+1)
    }
    let decrement=()=>{
        setCount(count-1)
    }
    let reset=()=>{
        setCount(0)
    }

    return (<div>
        <h1>{intialvalue}</h1>
        <button onClick={changeName}>changename</button>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>)
    
}
export default FBCStateEx;





