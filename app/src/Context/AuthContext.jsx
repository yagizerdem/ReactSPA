import { createContext, useContext, useState } from "react";

const FAKE_USER = {
    username: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };

const AuthContext = createContext()
function AuthProvider({children}){
    const [isLoggedIn ,setIsLoggedIn] = useState(false)
    function checkLogIn(userName , password){
        if(FAKE_USER.username == userName && FAKE_USER.password == password){
            setIsLoggedIn(true)
            return {success:true , redirectUrl:"/"}
        }
        return {success:false , redirectUrl:"/login"}
    }
    
    return(
        <AuthContext.Provider
            value={{
                checkLogIn:checkLogIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}

function useAuthContext(){
    const context =  useContext(AuthContext)
    if(context === null){
        throw new Error("AuthContext is outside of auth provider")
    }
    return context
}

export {useAuthContext , AuthProvider}