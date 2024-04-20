import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ButtonWithLet } from './Component/ButtonwithLet'
import { ButtonWithUseRef } from './Component/ButtonwithUseRef'
import { ButtonWithUseState } from './Component/ButtonWithUseState'
import InputBox from './Component/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <ButtonWithLet/> */}
   {/* <ButtonWithUseRef/> */}
   {/* <ButtonWithUseState/> */}
   <InputBox/>
   </>
  )
}

export default App
