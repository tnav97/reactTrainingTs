import { createContext, useContext, useState } from "react"

type UserContextProviderProps={
    children :  React.ReactNode
}

export type AuthUser ={
    name:string
    email:string
}
type UserContextType={
    user: AuthUser|null
    setUser: React.Dispatch<React.SetStateAction <AuthUser | null>>
}

const UserContext =createContext<UserContextType|null>({} as UserContextType);

export const UserContextProvider =({children}:UserContextProviderProps)=>{
    const [user,setUser]=useState<null|AuthUser>(null);
return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>

}
