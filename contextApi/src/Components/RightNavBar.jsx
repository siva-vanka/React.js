import React, { useContext } from 'react'
import { AppContext } from '../context/AppContextProvider';

//3. consume.
 //3.1 useContext -->hook.
 //3.2 AppContext import



const RightNavbar = () => {
   const val= useContext(AppContext);
   console.log(val);
  return (
    <div>RightNavbar</div>
  )
}

export default RightNavbar