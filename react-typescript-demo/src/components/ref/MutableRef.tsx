import React, { useEffect, useRef, useState } from 'react'

interface Props {}

function MutableRef(props: Props) {
    const [timer,setTimer]=useState(0);
const interValRef= useRef<number|null>(null);

const stopTimer =() =>{
    if(interValRef.current) window.clearInterval(interValRef.current)
}
useEffect(()=>{
    interValRef.current= window.setInterval(()=>{
        setTimer((timer)=>timer+1)
    },1000)
    return ()=>{
        stopTimer()
    }
    },[])
    const {} = props

    return (
        <div>
            HookTimer -{timer} -
            <button onClick={()=> stopTimer()}>
                Stop Timer
            </button>
        </div>
    )
}

export default MutableRef
