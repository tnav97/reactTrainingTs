import React, { useState } from 'react'

interface Props {}

function LoggedIn(props: Props) {
//     const {} = props
var isloggedIn=false;
// const [isloggedIn,setIsLoggedIn]=useState(false);
const handleLogin =()=>{
    isloggedIn=true;
    console.log(isloggedIn)
    // setIsLoggedIn(true);
}
const handleLogout =()=>{
    isloggedIn=false
    console.log(isloggedIn)
    // setIsLoggedIn(false);
}
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isloggedIn ?"logged-in":"logged-out"}</div>
        </div>
    )
}

export default LoggedIn
