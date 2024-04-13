import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0)

  const handleClickMe=()=>{
    console.log("clicked me")
  }

  const handleCartButton=()=>{
    console.log("clicked on cart")
  }

  const handlePaymentButton=()=>{

    alert ("clicked on payment")



  }

  const handleSubmitButton=()=>{

    console.log("clicked on submit")


  }

  return (

    <div>
< MyButton buttonText="click me!" bgColor="pink" clickMe={handleClickMe}/>
< MyButton  buttonText="cart" bgColor="brown" clickMe={handleCartButton}/>
< MyButton buttonText="payment" bgColor="green" clickMe={handlePaymentButton}/>
< MyButton buttonText="submit" bgColor="blue" clickMe={handleSubmitButton}/>


    </div>
   

   
  )
}

  export default App