import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './Component/Greetings/Greetings';
import MyButton from './StateChange/MyButton';

function App() {



  const [count,setCount]=useState(0) 
//  let userAuthenticated=false;

//  let content;

//  if(userAuthenticated){

//   content=<h1>User Authenticated</h1>
//  }else{
//   content=<h1>User Not Authenticated</h1>
//  }




const handleClick=()=>{
  setCount(count+1);
}

  return (
    

    //   {/* {content} */}
    // {userAuthenticated ? <h1 className='App'>User Authenticate</h1> : <h1 className='App'>User Not Authenticated</h1>}

    // <Greetings/>
    <div>

<h1>{count}</h1>
    <MyButton  count ={count} onClick={handleClick}/>
  <MyButton  count ={count} onClick={handleClick}/>

    </div>
  
   
  )
}

export default App
