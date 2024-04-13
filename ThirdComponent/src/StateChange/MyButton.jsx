import React from 'react'
import { useState } from 'react';

const MyButton = (props) => {

    const{count,onClick}=props

    // const [count,setCount]=useState(0)  // useState is one of the hook in react which returns the function , current value

    // let count=0;

    // const handleClick=()=>{
        // setCount(count+1);
    // }
  return (
<>
{/* <h1>{count}</h1> */}


<button  onClick={onClick}>MyButton</button>

</>
   
  )
}

export default MyButton