import React, { useEffect, useRef } from 'react'

interface Props {}

function DomRef(props: Props) {

    const inputRef =useRef<HTMLInputElement>(null!)
    const {} = props

useEffect(()=>{
inputRef.current?.focus()
},[])

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}

export default DomRef
