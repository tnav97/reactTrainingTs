import React from 'react'

interface Props {
    children:string
}

function Heading(props: Props) {
    const {children} = props

    return (<>{children}</>
        
    )
}

export default Heading
