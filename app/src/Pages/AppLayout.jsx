import { useNavigate } from "react-router";
import { useAuthContext } from "../Context/AuthContext";
import { useEffect } from "react";

export default function AppLayout(){
    const navigate = useNavigate();
    const {isLoggedIn} = useAuthContext()
    console.log(isLoggedIn)
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

    } 

    return(
        <div>
            app layout
        </div>
    )
}