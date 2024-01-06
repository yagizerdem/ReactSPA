import { createContext, useEffect } from "react"
import { useState , useContext } from "react"
import { redirect } from "react-router"


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
    
    function addDescription(index , textdata){
        markedAreas[index].description = textdata
        const jsondata = JSON.stringify(markedAreas)
        localStorage.setItem("world-wise" , jsondata)
    }
    function deleteRecord(index){
        const newarray = markedAreas.splice(1,index)
        setMarkedAreas(newarray)
        const jsondata = JSON.stringify(newarray)
        localStorage.setItem("world-wise" , jsondata)
    }

    return(
        <Context.Provider value={{
            clickedLocation,
            handleClickedLocation,
            storeMarkedAreas,
            markedAreas,
            addDescription,
            deleteRecord
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