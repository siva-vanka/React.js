import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiRequest from './component/ApiRequest'
import DataItem from './component/DataItem'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ApiRequest/>
   <DataItem/>
   </>
  )
}

export default App
