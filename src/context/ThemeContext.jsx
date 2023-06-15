import { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) =>{
    const [theme,setTheme] = useState(false); //themeFalse == darkMode; themeTrue == lightMode

    const data = {
        theme,
        setTheme
    }

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;