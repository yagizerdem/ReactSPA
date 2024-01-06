import { createContext, useEffect } from "react"
import { useState , useContext } from "react"

const Context = createContext()
export default function MapProvider({children}){
    const [clickedLocation , setClickedLocation] = useState()
    const [markedAreas , setMarkedAreas] = useState([])

    function handleClickedLocation(location){
        setClickedLocation(location)
    }
    function storeMarkedAreas(data){
        setMarkedAreas((prev) =>{
            if(prev == null) return[data]
            return [...prev ,  data]
        })
    }
    // get initial records from local storage
    useEffect(()=>{
        const records = JSON.parse(localStorage.getItem("world-wise"))
        setMarkedAreas(records)
    },[])



    return(
        <Context.Provider value={{
            clickedLocation,
            handleClickedLocation,
            storeMarkedAreas,
            markedAreas
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