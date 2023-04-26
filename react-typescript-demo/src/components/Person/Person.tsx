import React from 'react'

interface PersonProps {
    name: {
        first: string,
        last: string
    }
}

function Person(props: PersonProps) {
    const { name } = props

    return (<>{name.first} {name.last}</>

    )
}

export default Person
