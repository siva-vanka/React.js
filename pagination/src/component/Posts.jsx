import React, { useEffect ,useState} from 'react'
import PostItem from './PostItem';

const Posts = () => {

    const[post,setPost]=useState([]);

    const [page,setPage]=useState(1);

    const getData= async(page)=>{

        try{

        
        let response= await fetch(`https://jsonplaceholder.typicode.com/posts?_limit_=10&_page=${page}`);
        let data= await response.json();

        setPost(data);
    }
     catch (error){
    console.log("catching error",error)
    }
}
useEffect(()=>{

    getData(page);

},[page])

const handlePageChange=(val)=>{

    const updatePage=page+val
    setPage(updatePage);

}

  return (
    <>
    {post.map((element,id)=>{
        return(
            <PostItem key={id} id={element.id} title={element.title}/>
        )
    })}
    <div style= {{display:'flex'}}>
        <button disabled={page===1} onClick={()=>handlePageChange(-1)}>prev</button>

        <p>{page}</p>

        <button disabled={page===10} onClick={()=>handlePageChange(+1) }>next</button>
    </div>

    <div>
        <h1>{page}</h1>

        {new Array(10).fill(0).map((element,id)=>{
           return <button key={id} onClick={()=>setPage(id+1)}>{id+1}</button>
        })}



    </div>
    
    </>
    
  )
}

export default Posts