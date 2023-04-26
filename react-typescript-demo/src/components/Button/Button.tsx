import React from 'react'

interface ButtonProps {
    handleClick:()=>void,
}

function Button(props: ButtonProps) {
    const {} = props

    return (<button onClick={props.handleClick}>Click</button>
        
    )
}

export default Button
