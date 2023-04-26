import React from 'react'

interface Props {
    children:React.ReactNode
}

function Oscar(props: Props) {
    const {children} = props

    return (
        <div>{children}</div>
    )
}

export default Oscar
