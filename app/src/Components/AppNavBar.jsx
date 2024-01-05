import { NavLink } from "react-router-dom";


export default function AppNavBar(){

    return(
        <nav className="app-navbar">
            <ul>
                <li><NavLink 
                className={({ isActive, isPending }) =>
                isPending ? "app-navlink" : isActive ? "app-navlink active-app-navlink" : "app-navlink"
                }
                to="cities"
                >CITIES</NavLink></li>
                <li><NavLink
 className={({ isActive, isPending }) =>
 isPending ? "app-navlink" : isActive ? "app-navlink active-app-navlink" : "app-navlink"
 }
                  to="countries"
                >COUNTRIES</NavLink></li>
            </ul>
        </nav>
    )
}