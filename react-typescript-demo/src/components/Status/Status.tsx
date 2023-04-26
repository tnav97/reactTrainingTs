import React from 'react'

interface Props {
    status:'loading'|'success'|'error'
}

function Status(props: Props) {
    const {status} = props
let message;
if(status ==='loading'){
    message="Loading ...."
}else if(status ==='success'){
    message='data fetched successfully'
}
else if(status ==='error'){
    message='error fetching data'
}
    return (<div>
        <h2>{message}</h2>
    </div>
        
    )
}

export default Status
