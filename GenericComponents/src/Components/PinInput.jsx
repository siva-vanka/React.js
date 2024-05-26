import React, { forwardRef } from "react";

const PinInput = forwardRef(({ maxLength, onChangeFn,onBackSpaceFn}, ref ) => {

    const handleKeyPress=(e)=>{
        if(e.keyCode===8){
            onBackSpaceFn(e);
        }
        else{
            onChangeFn(e);
        }

    }
  return <input maxLength={maxLength} 
  ref={ref} 
  onKeyUp={handleKeyPress} />;
});

export default PinInput;
