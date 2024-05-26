import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pin from './Components/Pin'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Pin length={5} maxLength={1}/>
   
   </>
  )
}

export default App
