import React from 'react'

interface PersonListProps {
    names: {
        first: string,
        last: string
    }[]
}

function PersonList(props: PersonListProps) {
    const { names } = props

    return (<div>
        {names.map((name,index) => { return <h2 key={index}>{index} {name.first} {name.last}</h2> })}
    </div>

    )
}

export default PersonList
