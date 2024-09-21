import { useState, useEffect } from "react";

export default function Timer({timeout, onTimeout, mode}) {
let [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
      const timer = setTimeout(onTimeout, timeout);
      console.log(`SETTIN TIMOUT`)

      return () => {
        clearTimeout(timer)
      }
    }, [timeout, onTimeout])
   
    
    useEffect(() => {
    const inter =  setInterval(() => {
            setRemainingTime((prevTime) => {
             return prevTime - 100
            })
         }, 100)
         console.log(`SETTIN INTERVAL`);

         return () => {
          clearInterval(inter)
         }
    }, [])
   
    return (
        <progress id="question-time"
         max={timeout} 
         value={remainingTime} 
        className={mode}/>
    )
}