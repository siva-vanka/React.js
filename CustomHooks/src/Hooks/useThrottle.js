import React, { useEffect, useRef } from 'react'

const useThrottle = (callbackFn,delay) => {

    const id =useRef(false);

    useEffect(()=>{
        if(!id.current){
            id.current=true;
            setTimeout(()=>{
                callbackFn();
                id.current=false
            },delay)
        }
    },[callbackFn,delay])

}

export default useThrottle