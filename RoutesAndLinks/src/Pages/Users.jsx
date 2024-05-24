import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const getCurrentPageNumber=()=>{
  pageNumber=Number(pageNumber);

  if (typeof pageNumber !== "number" && pageNumber<=0){
      pageNumber=1;
  }
  return pageNumber;

  if(!pageNumber){
    pageNumber=1;
    return 
      pageNumber ;

    
  }
}
const Users = () => {
  const [data, setData] = useState([]);
 
  const {isAuth}=useContext(AuthContext)
  const initialPage=getCurrentPage(searchParams.get("page"))
  const[page,setPage]= useState(initialValue);
  const navigate=useNavigate()

  let[searchParams,setSearchParams]=useSearchParams();
  

  async function fetchingData() {
    try {
      let response = await fetch(`https://reqres.in/api/users?page=${page}`);
      let data = await response.json();

      setData(data?.data || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData(page);
  }, [page]);


  useEffect(() => {
    setSearchParams(page);
  }, [page]);

  const handlePageChange=(val)=>{

    const changeByValue=page+val;
    setPage(changeByValue);

  }
  return (
    <>
      <h1>Users page</h1>
      <button onClick={()=>navigate('/Home')}>Navigate to home page using NavigateHook</button>
      <Link to="/Home">
      <button>go to home page using Link</button>
      </Link>
      
      {data.map((users) => {
        return (
          <div style={{ border: "1px solid white", margin: "10px" }}>
            {/* key={users.id} */}
            <img src={users.avatar} alt="" />
            
            <Link to ={`${users.id}`}>
            {users.first_name}
            </Link>
          </div>
        );
      })
      }
    <button onClick={()=>handlePageChange(-1)}>previous</button>
    <button onClick={()=>handlePageChange(+1)}>Next</button>
    </>
  );
};
export default Users
