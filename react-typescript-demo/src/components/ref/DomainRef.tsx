import React, { useEffect, useRef } from 'react'

interface Props {}

function DomainRef(props: Props) {
const inputref=useRef<HTMLInputElement>(null)
    const {} = props

    useEffect(()=>{
        inputref.current?.focus()
    })

    return (<div>
        <input type='text' ref={inputref} />
    </div>
        
    )
}

export default DomainRef
