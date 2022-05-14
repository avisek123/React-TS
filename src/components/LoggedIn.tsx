import { useState } from "react";

export const LoggedIn=()=>{
    const [isLoggedIn,setLoggedIn]=useState(false);
    const handleLogin=()=>{
        setLoggedIn(true);
    }
    const handleLogout=()=>{
        setLoggedIn(false);
    }
    return(
        <div>
            <button onClick={handleLogin}>LogIn</button>
            <button onClick={handleLogout}>LogOut</button>
            <div>User is {isLoggedIn?.length ? 'loggedIn' : 'loggedOut'}</div>

        </div>
    );
}