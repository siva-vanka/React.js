import React, { useRef } from 'react'

const InputBox = () => {
    

        const inputRef = useRef([]);

        const handleButton=()=>{
          // inputRef.current.focus();

            console.log(inputRef);

        }

    
  return (
    <>
    < input type="text" style={{width:"20px"}} id="inputTag1" ref={(element)=>{

    return inputRef.current[0]=element;
     }} />
    < input type="text" style={{width:"20px"}} id="inputTag2" ref={(element)=>{

return inputRef.current[1]=element;
 }} />
    < input type="text" style={{width:"20px"}} id="inputTag3" ref={(element)=>{

return inputRef.current[2]=element;
 }} />
    < input type="text" style={{width:"20px"}} id="inputTag4" ref={(element)=>{

return inputRef.current[3]=element;
 }} />
    <button onClick={handleButton}>focusInput</button>
    </>
    
  )
}
export default InputBox