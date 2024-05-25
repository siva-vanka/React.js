import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useReducer } from "react";
import { reducer } from "./fetchRestaurantReducer";
import RestaurantCard from "../RestaurantCard";
import { deleteRestaurant, getRestaurants, postRestaurants } from "../api/api";
import { useState } from "react";
import AddRestaurants from "./AddRestaurants";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const Restaurant = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [page,setPage]=useState(1);

  const fetchAndUpdateData=()=>{

    dispatch({ type: "FETCH_LOADING" });
    getRestaurants({page:page,perPage:10})
      .then((response) => {
        console.log("res", response?.data?.data);
        dispatch({ type: "FETCH_SUCCESS", payload: response?.data?.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "FETCH_ERROR" });
      });

  }

  useEffect(() => {

    fetchAndUpdateData(page)
  
  }, [page]);

  const handleAddRestaurant=(restaurantData)=>{
    postRestaurants(restaurantData).then(()=>{
      fetchAndUpdateData(page);
    })

  }

  const handleDeleteRestaurant=(id)=>{
    deleteRestaurant(id).then(()=>{
      fetchAndUpdateData(page);
    })

  }
  const { loading, error, data } = state;

  return loading ? (
    <h1>loading....</h1>
  ) : error ? (
    <h1>Something went wrong </h1>
  ) : (
    <>

    <AddRestaurants   handleAddRestaurant={handleAddRestaurant} />
      {data.map((restaurant) => {
        return <RestaurantCard key={restaurant.id} {...restaurant}  handleDeleteRestaurant={handleDeleteRestaurant}/>;
      })}
      <div>

        <button disabled={page===1} onClick={()=>setPage(page-1)}>prev</button>
        <p>{page}</p>
        <button onClick={()=>setPage(page+1)}>next</button>


      </div>
    </>
  );
};

export default Restaurant;
