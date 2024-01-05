import { useAuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router"

export default function LogOut(){
    const context = useAuthContext()
    const navigate = useNavigate();
    function HandleClick(){
        navigate("/")
        context.setIsLoggedIn(false)
    }
    return(
        <div className="logout-bar">
            <img src={context.avatar}></img>
            <div className="username">{context.userName}</div>
            <button onClick={HandleClick}>LogOut</button>
        </div>
    )
}