import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Users from '../Pages/Users'
import SingleUserPage from '../Pages/SingleUserPage'
import Login from '../Pages/Login'
import { NotFound } from '../Pages/NotFound'


const AllRoutes = () => {
  return (

    <Routes>

    <Route  path= "/" element={<Home/>}/>
    <Route  path= "/Cart" element={<Cart/>}/>
    <Route  path= "/About" element={<About/>}/>
    <Route  path= "/users" element={<Users/>}/>
    <Route  path= "/users/:id" element={<SingleUserPage/>}/>
    <Route  path= "login" element={<Login/>}/>
    <Route  path= "*" element={<NotFound/>}/>





  </Routes>

  )
}

export default AllRoutes