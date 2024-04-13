import React from 'react'
import { useState } from 'react'

const CallBack = () => {

    const[amount , setAmount]=useState(0);


    // const handleDeposit=()=>{
    //     setAmount(amount+100);
    //     setAmount(amount+100);
    //     setAmount(amount+100);
    //     setAmount(amount+100);
    //     setAmount(amount+100);
    //     console.log(amount);
    // }


    const handleDeposit=()=>{
        setAmount((previousValue)=> previousValue+100);
        setAmount((previousValue)=> previousValue+100);
        setAmount((previousValue)=> previousValue+100);
        setAmount((previousValue)=> previousValue+100);
        setAmount((previousValue)=> previousValue+100);

        // console.log(amount)
    }

    console.log("current amount" ,amount)
  return (
    <div><h1>current:{amount}</h1>

    <button onClick={handleDeposit}>Deposit 100</button>
    
    
    
    </div>
  )
}

export default CallBack