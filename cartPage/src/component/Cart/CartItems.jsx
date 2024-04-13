import React from 'react'
import LabelPrice from './LabelPrice'
import QuantityContainer from './QuantityContainer'

const CartItems = ({id,label,price,quantity,changeQuantity}) => {
  return (
    <div style={{display:'flex',gap:"5px"}}>

    <LabelPrice label={label} price={price}/>
    <QuantityContainer quantity={quantity} id={id} changeQuantity={changeQuantity}/>
    </div>
  )
}

export default CartItems