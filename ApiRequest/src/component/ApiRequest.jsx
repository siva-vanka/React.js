import React from 'react'
import { useState } from 'react';
import DataItem from './DataItem';


const  ApiRequest= () => {

    const[posts,setPosts]=useState([]);
    const[loading ,setLoading]=useState(false);
    const[error,setError]=useState(false);

    
        const fetchingData= async () =>{
          try{

            setLoading(true);

            let url ="https://jsonplaceholder.typicode.com/posts";
    
            let response=await fetch(url);
    
            let data= await response.json();



            console.log(data);
    
           setPosts(data);

           setLoading(false);

       
    }catch(error){
        console.log(error);
        setError(true);

        setLoading(false);
    }
    };
    if(loading){
      return <h1>Loading....</h1>
    }

    if(error){
      return <h1>Something Went Wrong.... Please Check</h1>
    }
  return (
    <>
    <h1>Click on the below button to get posts</h1>
    <button onClick={fetchingData}>GetPosts</button>

    {posts.length > 0 && posts.map((element)=>{
 return(
        <DataItem  title={element.title} id={element.id} key={element.id}/>
  )

    })}
    
    
    </>
  )
}

export default ApiRequest;