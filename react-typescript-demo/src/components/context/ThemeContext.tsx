import React, { createContext, useContext } from 'react'
import { theme } from './theme'

interface ThemeContextProvider {
    children:React.ReactNode
}
export const ThemeContext =createContext(theme)
function ThemeContextProvider({children}:ThemeContextProvider) {


    return (<ThemeContext.Provider value={theme}></ThemeContext.Provider>
        
    )
}

export default ThemeContextProvider
