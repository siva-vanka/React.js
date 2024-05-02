import React, { useContext } from 'react'
import LeftNavbar from './LeftNavbar'
import RightNavbar from './RightNavbar'
import { AppContext } from '../context/AppContextProvider'
 
const Navbar = () => {
    const {isAuth, login, logout} = useContext(AppContext)
  return (
    <div style={{display:"flex", justifyContent:"space-between", gap:"10px"}}>
   <h5>Is User Authenticated : {isAuth ? "Yes": "No"} </h5>
   <button onClick={login}>
    login
   </button>
   <button onClick={logout}>logout</button>
    </div>
  )
}

export default Navbar