import { useRef, useState } from "react"
import { useMapContext } from "../Context/MapContext"

export default function City(){
    const [showDescription , setShowDescription] = useState(-1)
    const {markedAreas,  addDescription , deleteRecord} = useMapContext()
    const descriptionref = useRef()
    function handleSubmitDescription(index , textdata){
        addDescription(index , textdata)
        setShowDescription(-1)
    }
    const body = markedAreas != null ? 
        <ul>
        {markedAreas.map((item , index) =>(
            <li key={item.lat + item.lon}>
                <span><span className="record-header">city name</span> : <span className="record-item">{item.cityname} </span></span>
                <span><span className="record-header">country name</span> : <span className="record-item">{item.countryname}</span></span>
                <span><span className="record-header">time zone</span> :<span className="record-item">{item.timezone}</span> </span>
                <span><button onClick={()=>{showDescription == -1 || showDescription != index  ? setShowDescription(index) : setShowDescription(-1)}} className="add-description">Add description : <i className="fa-solid fa-pen"></i></button></span>
                {showDescription == index ? 
                <div className="description-container">
                    <label>enter description</label>
                    <textarea ref={descriptionref} defaultValue={item.description}>

                    </textarea>
                    <button onClick={()=>{handleSubmitDescription(index , descriptionref.current.value)}}>Submit</button>
                </div> :''}
                <div>
                    <button className="delete-record-btn" onClick={()=>{deleteRecord(index)}}><i class="fa-solid fa-trash"></i></button>
                </div>
                <hr/>
            </li>    
        ))}
        </ul>
        :
    <div>No city has visited yet </div>
    

    return(
        <>
            <div className="city-records">
                {body}
            </div>
        </>
    )
}