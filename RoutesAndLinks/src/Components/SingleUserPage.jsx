import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const SingleUserPage = () => {
    
    
    const [data, setData] = useState([]);
    const params =useParams();

    async function fetchingData(params) {
      try {
        let response = await fetch(`https://reqres.in/api/users/${params.id}`);
        let data = await response.json();
  
        setData(data?.data || []);
      } catch (error) {
        console.log(error);
      }
    } 
  
    useEffect(() => {
      fetchingData(params);
    }, [params.id]);
  return (
    <div>

        <img src={data.avatar} alt=""/>
        <p>{data.first_name}</p>

        <Link to= "/users">
        <button>Go Back</button>
        </Link>
    </div>

  )
}

export default SingleUserPage