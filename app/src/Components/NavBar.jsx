import { Link } from "react-router-dom"

export default function NavBar(){

    return(
        <nav className="app-layout-navbar">
            <ul>
                <li>
                    <Link to="/" className="link-item">Home</Link>
                </li>
                <li>
                <Link to="/pricing" className="link-item">PRICING</Link>
                </li>
                <li>PRODUCT</li>
                <li><button>LogIn</button></li>
            </ul>
        </nav>
    )
}