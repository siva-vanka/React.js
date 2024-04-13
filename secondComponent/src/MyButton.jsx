import React from 'react'

const MyButton = (props) => {

    const {buttonText:text,bgColor:color,clickMe}=props

   

    
  return (
    <button style={{backgroundColor:color}} onClick={clickMe}>{text}</button>
  )
}

export default MyButton