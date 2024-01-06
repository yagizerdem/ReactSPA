import { createContext } from "react"
import { useState , useContext } from "react"

const Context = createContext()
export default function MapProvider({children}){
    const [clickedLocation , setClickedLocation] = useState()
    function handleClickedLocation(location){
        setClickedLocation(location)
    }
    return(
        <Context.Provider value={{
            clickedLocation,
            handleClickedLocation
        }}>
            {children}
        </Context.Provider>
    )
}

function useMapContext(){
    const context =  useContext(Context)
    if(context === null){
        throw new Error("MapContext is outside of  provider")
    }
    return context
}
export {useMapContext , MapProvider}