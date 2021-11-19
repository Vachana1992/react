import React from 'react'
import { useState,useEffect } from 'react'

function Counter() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("Mounting..")
       console.log("Updating.."+count)
       return()=>{
        console.log("UnMounting../CleanUp"+count)
       }
    },[count])
    
    return (
        <div>
            <button onClick={()=>setCount(count+1)}> Increment</button>
            <h1>Hello I am a componenet {count}</h1>
        </div>
    )
}

export default Counter
