import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);

  async function fetchingData() {
    try {
      let response = await fetch("https://reqres.in/api/users?page=2");
      let data = await response.json();

      setData(data?.data || []);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData();
  }, []);
  return (
    <>
      <h1>Users page</h1>
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
      })}
    </>
  );
};

export default Users
