import React, { useEffect, useRef } from 'react'

const useDebouncing = (callbackFn,delay) => {
    const id=useRef();
 useEffect(()=>{

    id.current && clearTimeout(id.current);
    id.current=setTimeout(()=>{
        callbackFn();
    },delay)
 },[delay,callbackFn])
}

export default useDebouncing