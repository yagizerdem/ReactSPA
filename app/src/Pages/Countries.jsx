import { useMapContext } from "../Context/MapContext"


export default function Countries(){
    const {markedAreas} = useMapContext()
    const allDistinctCountryNames = []
    for(var record of markedAreas){
        const countryName = record.countryname
        console.log()
        if(!allDistinctCountryNames.includes(countryName)){
            allDistinctCountryNames.push(countryName)
        }
    }

    const body = <ul>
        {        
        allDistinctCountryNames.map((item)=>(
            <li>{item}</li>
        ))}
    </ul>
    return(
        <>
            <div className="country-container">
                {body}
            </div>
        </>
    )
}