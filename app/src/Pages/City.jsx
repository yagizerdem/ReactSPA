import { useMapContext } from "../Context/MapContext"


export default function City(){
    const {markedAreas} = useMapContext()
    console.log(markedAreas)
    const body = markedAreas != null ? 
        <ul>
        {markedAreas.map(item =>(
            <li>
                <span><span className="record-header">city name</span> : <span className="record-item">{item.cityname} </span></span>
                <span><span className="record-header">country name</span> : <span className="record-item">{item.countryname}</span></span>
                <span><span className="record-header">time zone</span> :<span className="record-item">{item.timezone}</span> </span>
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