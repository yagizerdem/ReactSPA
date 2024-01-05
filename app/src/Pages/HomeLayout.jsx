import { useFetcher, useLinkClickHandler } from "react-router-dom";
import NavBar from "../Components/NavBar"
import bg from "../assets/bg.jpg"
import { Outlet, useLocation } from "react-router"
import { ToastContainer, toast  } from "react-toastify";
import { useCallback, useEffect } from "react";

export default function HomeLayout(){
  const {state} = useLocation();
  const notify = (message) => toast(message)

  if(state != undefined && state.payroll.errorcode != undefined){
      notify(state.payroll.errormessage)
  }
  window.history.replaceState({}, document.title)
    return(
        <div className="container">
                                  <div className="shadow"></div>
        <div className="center" style={{
          background:`url(${bg})`,
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}>
            <div className="card">
            <NavBar></NavBar>
            <Outlet/>
            </div>


        </div>
        <ToastContainer/>
      </div>
    )
}