import React, { useRef } from "react";

import PropTypes from "prop-types";
import PinInput from "./PinInput";

const Pin = ({ length, maxLength }) => {
  const array = useRef(new Array(length).fill("a"));

  const inputBoxValue=useRef(new Array(length).fill(""));
  const inputRef = useRef([]);

  const onChangeHandler = (e, index) => {
    inputBoxValue.current[index]=e.target.value;
    if (index < length - 1) {
      inputRef.current[index + 1].focus();
      //inputRef.current[index-1].focus();
    //   
    }
}

    const backSpaceHandler=(e,index)=>{
        if(index>0)
        inputRef.current[index-1].focus();
    
  };

  const handlePasteEvent=(e)=>{
    console.log(e);

    let data=e.clipboardData.getData("text").split("").filter((item,index)=>index<length)
    data.forEach((item,index)=>{
        inputRef.current[index].value=item;
    })
  };
  return (
    <div className="App" onPaste={handlePasteEvent}>
      {array.current.map((item, index) => {
        return <PinInput key={index} maxLength={maxLength}
        
        ref={(element) => {
            inputRef.current[index]=element;
        
        
        }}

        onChangeFn={(e)=>onChangeHandler(e,index)}
        onBackSpaceFn={(e)=>backSpaceHandler(e,index)}
        />;
      })}
    </div>
  );
};

export default Pin;

Pin.prototype = {
  length: PropTypes.number,
  maxLength: PropTypes.number,
};
