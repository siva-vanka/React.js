import React, { useState } from "react";
import CartItems from "./CartItems";
import Total from "./Total";

let cartItems = [
  { id: 1, label: "Noodles", price: 30, quantity: 0 },
  { id: 2, label: "Biryani", price: 90, quantity: 0 },
  { id: 3, label: "chips", price: 10, quantity: 0 },
];

const CartContainer = () => {

    const[cart,setCart]=useState(cartItems);

    const changeQuantity=(id,value)=>{
        let updateCart=cart.map((item)=>(

            item.id===id ?{...item, quantity:item.quantity+ value} :item


        ))

        setCart(updateCart);

    }

    const totalPrice=cart.reduce(function(bag,item){
        return(
            bag + (item.price * item.quantity)
        )
    },0)
  return (
    <>
    {cart.map((item)=>(
        <CartItems  key={item.id} {...item} changeQuantity={changeQuantity}/>
    )

    )}
      
      <Total  totalPrice={totalPrice} />
    </>
  );
};

export default CartContainer;
