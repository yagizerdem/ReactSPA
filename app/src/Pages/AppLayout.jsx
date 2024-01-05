import { Outlet, useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";
import { useEffect , useCallback } from "react";
import Map from "../Components/Map";
import AppNavBar from "../Components/AppNavBar";
import LogOut from "../Components/LogOut";

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
            <LogOut></LogOut>
                <div className="app-left">
                <AppNavBar></AppNavBar>
                <Outlet></Outlet>
                
                </div>
                <div className="app-right">
              

                  {<Map/>}
                </div>
            </div>
        </div>
    )
}