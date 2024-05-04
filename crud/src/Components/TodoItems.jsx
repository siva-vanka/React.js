import React from 'react'

const TodoItems = ({id,title, status,handleDelete, handleToggle}) => {

    function handleUpdate(){
        const body={status:!status};
        handleToggle(id,body);

    }
  return (
    <div style={{border:"1px solid black", margin:"10px"}}>
        <p>{title}</p>
        <p>{status ? "completed":  "not completed"}</p>
        <button onClick={()=>handleDelete(id)}>Delete</button>
         <button onClick={()=> handleUpdate()}>toggle</button>
    </div>
  )
}

export default TodoItems