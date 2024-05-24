import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {

  const[isAuth,setIsAuth]=useState(true);

  const login=()=>{
    setIsAuth(true);
  }

  const logout=()=>{
    setIsAuth(false);
  }
  return (
    <AuthContextProvider value={{isAuth,login,logout}}>
      {children}
    </AuthContextProvider>
  )
}

export default AuthContextProvider