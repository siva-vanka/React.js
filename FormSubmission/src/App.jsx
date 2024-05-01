import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './FormComponent'
import FormComponent2 from './FormComponent2'
import UploadImages from './UploadImages'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <FormComponent/> */}

   {/* <FormComponent2/> */}
   {UploadImages}
   </>
  )
}

export default App
