import axios from "axios";



export const getRestaurants = (params) => {
    return axios.get(import.meta.env.VITE_RESTAURANT_URL,{
        params:{
            _per_page:params._perPage,
            _page:params.page
        }
    });
  };

  export const postRestaurants=(restaurant)=>{
    return axios.post('http://localhost:3000/restaurants',{
        name:restaurant.name,
        type:restaurant.type,
        rating:restaurant.rating,
        number_of_votes:restaurant.number_of_votes,
        price_starts_from:restaurant.price_starts_from,
        image:restaurant.image
    })
  }


  export const deleteRestaurant=(id)=>{
    return axios({
        method:"delete",
        url:(`http://localhost:3000/restaurants/${id}`)
    })
 }