import { useEffect, useState, useRef, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeContext } from './context/ThemeContextProvider'


function App() {
  const {theme, toggleTheme}=useContext(ThemeContext);
  return(
<div className='App'
style={{background:theme==="dark"? "black": "white",
color:theme==="dark"? "white" :"black",
padding:"10px"
}} >

  <Navbar/>
  <h1>theme:{theme}</h1>
  <button onClick={toggleTheme}>toggle Theme</button>
</div>
  )
}
export default App




