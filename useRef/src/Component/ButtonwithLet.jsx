
export function ButtonWithLet(){
    let val=0;
  
    function handleCount(){
      val=val+1;
      console.log(val);
  
     
    }
    console.log("render");
  
    return(
      <>
      <h1>count:{val}</h1>
      <button onClick={handleCount}>Click</button>
      
      </>
    )
  }