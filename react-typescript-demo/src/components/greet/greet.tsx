import React from 'react'

interface GreetProps {
    name: string,
    messageCount: number,
    isLoggedIn?:boolean
}

function Greet(props: GreetProps) {
    const {name, messageCount} = props

    return (
       <><h2>{name}-{messageCount}</h2></> 
    )
}

export default Greet
