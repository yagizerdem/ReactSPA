import { useEffect, useRef, useState } from "react"
import { useMapContext } from "../Context/MapContext"


export default function ShowCity(){
    const {clickedLocation , storeMarkedAreas} = useMapContext()
    const imgsrc = clickedLocation ? `https://flagsapi.com/${clickedLocation.countryCode}/shiny/64.png` : " "
    const body = clickedLocation != undefined ? 
    <div className="city-information">
             <img src={imgsrc}></img>
            <div className="show-city-row">
                <span>Country Name : </span>
                <span>{clickedLocation.countryName}</span>
            </div>
            <div className="show-city-row">
                <span>City Name : </span>
                <span>{clickedLocation.city}</span>
            </div>
            <div className="show-city-row">
                <span>Time Zone : </span>
                <span>{clickedLocation.localityInfo.informative[1].name}</span>
            </div>
            <div className="show-city-row">
                <button onClick={markArea} className="mark-button">Mark as visited</button>
            </div>
    </div>:
    <div className="no-city-selected">No city has selected</div>

    function markArea(){
        // logging  to local storage
        var datafromlocaldb = JSON.parse(localStorage.getItem("world-wise"));
        if(datafromlocaldb == null) {
            datafromlocaldb = []
            console.log("girdi")
        }
        const data = {
            countryname : clickedLocation.countryName,
            cityname : clickedLocation.city,
            timezone : clickedLocation.localityInfo.informative[1].name,
            description : "",
            lat : clickedLocation.latitude,
            lon : clickedLocation.longitude
        }
        datafromlocaldb.push(data)
        const json = JSON.stringify(datafromlocaldb)
        localStorage.setItem('world-wise', json)

        storeMarkedAreas(data)
    }

    return(
        <div className="show-city-container">
            {body}
        </div>
    )
}