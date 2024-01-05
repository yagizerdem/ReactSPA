import { useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";
import { useEffect , useCallback } from "react";
import Map from "../Components/Map";

export default function AppLayout(){
    const navigate = useNavigate();
    const {isLoggedIn} = useAuthContext()
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

    return(
        <div className="app-container">
            <div className="app-center">
                <div className="app-left">

                </div>
                <div className="app-right">
                  {<Map/>}
                </div>
            </div>
        </div>
    )
}