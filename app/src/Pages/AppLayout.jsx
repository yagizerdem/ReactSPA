import { Outlet, useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";
import { useEffect , useCallback } from "react";
import Map from "../Components/Map";
import AppNavBar from "../Components/AppNavBar";
import LogOut from "../Components/LogOut";
import ShowCity from "../Components/ShowCity";
import useGoogleSearchApi from "../hooks/useGoogleSearchApi";
import { useMapContext } from "../Context/MapContext";

export default function AppLayout(){
    const navigate = useNavigate();
    const { isLoading, error, getPosition , position } = useGoogleSearchApi()
    const {isLoggedIn} = useAuthContext()
    const {changeCenter} = useMapContext()
    if(!isLoggedIn){
        useEffect(()=>{
            navigate("/" , {
                state: {
                    payroll: {
                      errorcode: '404',
                      errormessage: 'unauthorized access'
                    }
                  }
            })
        },[navigate])
        return
    } 

    useEffect(()=>{
        if(position != null){
            map.panTo(new L.LatLng(40.737, -73.923));
            changeCenter([position["lat"]  , position["lng"] ])
        }
    },[position])

    function getUserPosition(){
        async function asenkron(){
            await getPosition()
            console.log(position)
        }
        asenkron()
        
    }

    return(
        <div className="app-container">
            <div className="app-center">
            <LogOut></LogOut>
                <div className="app-left">
                <AppNavBar></AppNavBar>
                <Outlet></Outlet>
                <br/><hr/><br/>
                <ShowCity></ShowCity>
                </div>
                <div className="app-right">
                  {<Map/>}
                  <button className="use-your-location" onClick={getUserPosition}>
                    {isLoading == true ? 
                    <span>spinner</span>
                    :
                    "User your current location"
                    }
                  </button>
                </div>
            </div>
        </div>
    )
}