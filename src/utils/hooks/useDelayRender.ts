import { useEffect, useState } from "react";

 const delayRender = (delay : number = 1000)=>{

  const [isDelay, setIsDelay] = useState(true)
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setIsDelay(false)
    },delay);

    return ()=> clearTimeout(timeout)
  },[])

  return isDelay;

}

export default delayRender