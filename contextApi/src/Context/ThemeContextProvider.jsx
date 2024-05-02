import { createContext, useState } from "react";
//1. create context
export const ThemeContext= createContext();

//2 . provider.
export const ThemeContextProvider=({children})=>{
    const [theme, setTheme]=useState("dark");

    const toggleTheme=()=>{
        setTheme(theme==="dark"? "light": "dark");
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}