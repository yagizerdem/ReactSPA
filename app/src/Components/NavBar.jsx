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
                <li>
                <Link to="/product" className="link-item">PRODUCT</Link>
                </li>
                <li>
                <Link to="/login" className="logInButton">LogIn</Link>
                </li>
            </ul>
        </nav>
    )
}