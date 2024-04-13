import React from 'react'

const QuantityContainer = ({id,quantity,changeQuantity}) => {
  return (
    <div style={{display:'flex',gap:"5px"}}>
    <button  onClick={()=>changeQuantity(id,-1)}>-</button>
    <p>{quantity}</p>

    <button onClick={()=>changeQuantity(id,+1)}>+</button>

    </div>
  )
}

export default QuantityContainer