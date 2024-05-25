import React from 'react'

const RestaurantCard = ({
    id,
    image,
    name,
    type,
    rating,
    number_of_votes,
    price_starting_from,
    handleDeleteRestaurant
}) => {
  return (
    <div style={{border:"1px solid white",margin:"10px"}}>
        <img src={image} alt=""/>
        <p>Name:{name}</p>
        <p>Rating:{rating}</p>
        <p>Number_Of_Votes:{number_of_votes}</p>
        <p>price_starting_from:{price_starting_from}</p>

        <button onClick={()=>handleDeleteRestaurant(id)}>Delete</button>

    </div>
  )
}

export default RestaurantCard