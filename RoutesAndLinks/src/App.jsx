import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Users from './Components/Users'
import SingleUserPage from './Components/SingleUserPage'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <NavBar/>

  
  <Routes>

    <Route  path= "/" element={<Home/>}/>
    <Route  path= "/Cart" element={<Cart/>}/>
    <Route  path= "/About" element={<About/>}/>
    <Route  path= "/users" element={<Users/>}/>
    <Route  path= "/users/:id" element={<SingleUserPage/>}/>




  </Routes>

 
  </>
  )
}

export default App
