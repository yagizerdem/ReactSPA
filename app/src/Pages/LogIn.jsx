import { useRef } from "react"
import { useAuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LogIn(){
    const navigate = useNavigate();
    const {checkLogIn} = useAuthContext()
    const userNameref = useRef()
    const passwordref = useRef()
    const notify = (message) => toast(message);
    function handleClick(e){
        e.preventDefault()
        const result = checkLogIn(userNameref.current.value , passwordref.current.value)
        if(result.success == true){
            navigate(result.redirectUrl)
        }
        else{
            navigate(result.redirectUrl )
            notify("please enter valid data")
        }
    }

    return(
        <div className="login-card">
            <form>
                <label>User Name</label>
                <input type="text" placeholder="user name" ref={userNameref} defaultValue={"Jack"} ></input>
                <label>Password</label>
                <input type="text" placeholder="password" ref={passwordref} defaultValue={"qwerty"}></input>
                <button type="submit" onClick={(e)=>{handleClick(e)}} className="login-btn">LogIn</button>
            </form>
            <ToastContainer />
        </div>
    )
}