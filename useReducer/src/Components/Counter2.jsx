import React, { useReducer } from "react";

const reducerFunction = (currentState, actionObject) => {
  if(actionObject.type==="INCREASE_COUNT"){
      return currentState+actionObject.payload;
  }
  else if(actionObject.type==="DECREASE_COUNT"){
      return currentState-actionObject.payload;
  }
  else if(actionObject.type==="RESET_COUNT"){
    return actionObject.payload
  }
  else{
      throw new Error ("object Type not defined")
  }

//   switch (actionObject.type) {
//     case "INCREASE_COUNT": {
//       return currentState + actionObject.payload;
//     }

//     case "DECREASE_COUNT": {
//       return currentState - 1;
//     }

//     case "RESET_COUNT": {
//       return actionObject.payload;
//     }

//     default: {
//       throw new Error("Object Type Not defined");
//     }
//   }
}

const Counter2 = () => {
  const [count, dispatch] = useReducer(reducerFunction, 0);

  const handleIncrement = () => {
    dispatch({ type: "INCREASE_COUNT", payload: 2 });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREASE_COUNT", payload: 1 });
  };

  const handleReset = () => {
    dispatch({ type: "RESET_COUNT", payload: 0 });
  };
  return (
    <>
      <h1>Counter : {count}</h1>

      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={handleReset}>RESET</button>
    </>
  );
};

export default Counter2;
