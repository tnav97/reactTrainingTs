import React, { useState } from 'react'

interface Props {
    name?:string
    email?:string
}

function User(props: Props) {
    const {} = props
    // const [user,setUser]=useState<null|Props>(null);
    const [user,setUser]=useState<Props>({} as Props);
    const  handleLogin=()=>{
        setUser({
            name:'Vishwas',
            email:'vishwas.google.com'
        })
    }
    // const handleLogout = () => {
    //     setUser(null)
    //   };
    return (    
    <div>
        <button onClick={handleLogin}>Login</button>
        {/* <button onClick={handleLogout}>Logout</button> */}
        {user && <div>User Name is {user?.name}</div>}
        {user && <div>User Name is {user?.email}</div> }
    </div>   
    )
}

export default User
