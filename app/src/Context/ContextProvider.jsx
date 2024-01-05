import { createContext } from "react"


const Context = createContext()
export default function ContextProvider({children}){
    
    
    return(
        <Context.Provider value={{
        }}>
            {children}
        </Context.Provider>
    )
}