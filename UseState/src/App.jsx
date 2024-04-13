import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CallBack from './Component/CallBack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CallBack/>
     
    </>
  )
}

export default App
