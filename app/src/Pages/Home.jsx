import { Outlet } from "react-router";


export default function Home(){

    return(
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
            <button className="traking-btn">START TRACKING NOW</button>
        </div>

    )
}