import React, { useState } from 'react'

interface UserProps {
    name: string
    email:string
}

function User() {

    const [user,setUser]=useState<UserProps>({} as UserProps)
    const handleLogin =()=>{
setUser({
    name:'vishwas',
    email:'vishwas@qbrainx.com'
})
   
    }

    return (   <div>
        <button onClick={handleLogin}>Login</button>
        <div>User Name is {user?.name}</div>
        <div>User Email is {user?.email}</div>
    </div>
        
    )
}

export default User
