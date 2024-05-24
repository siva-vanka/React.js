import React from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { useContext } from 'react'


const Login = () => {
    const {isAuth,login}=useContext(AuthContext);
  return (
    <button disabled={isAuth} onClick={login}>
        Login

    </button>
  )
}

export default Login