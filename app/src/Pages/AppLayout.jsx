import NavBar from "../Components/NavBar"
import bg from "../assets/bg.jpg"
import { Outlet } from "react-router"

export default function AppLayout(){

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
      </div>
    )
}