import React from 'react'

interface InputProps {
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

function Input(props: InputProps) {
    const {} = props
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e)
    }

    return (<input type='text' onChange={(e)=>handleChange(e)}></input>
        
    )
}

export default Input
