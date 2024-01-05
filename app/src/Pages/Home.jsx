import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";


export default function Home(){
    const {isLoggedIn} = useAuthContext()
    return(
        <>

        <div className="container_">
            <h1 className="title">
                You travel the world.
                <br />
                WorldWise keeps track of your adventures.
            </h1>
            <h2 className="sub-title">
            A world map that tracks your footsteps into every city you can think of.
                <br/>
             Never forget your wonderful experiences, and show your friends how you have wandered the world.
            </h2>

            <button className="traking-btn"><Link to ={isLoggedIn ? "/app" :  "/login" } >START TRACKING NOW</Link></button>
        </div>
        </>


    )
}