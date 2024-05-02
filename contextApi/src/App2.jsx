import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return(
<>
  <div>hello everyone</div>
<Card id={12}>
<Avatar image={"https://i.pinimg.com/736x/8f/0c/81/8f0c8139d840dc28c0cbf745e4409e17.jpg"} name={"spider"}/> 
{/* //component inside component */}
</Card>
</>
  )
}
export default App


const Card=(props)=>{
  console.log(props.children); // it is used for only components which are added
  //inside open and closing component
  return(
    <div style={{border:"10px solid red"}}>{props.children}</div>
  )
}

const Avatar=({image, name})=>{
  return(
    <>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>this is avatar</p>
    </>
  )
}


