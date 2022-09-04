import React from 'react'
// import "./login.css"
import { auth, provider } from "../firebase"
import { signInWithPopup } from 'firebase/auth'
import {useNavigate} from "react-router-dom";


function Login({setIsAuth}) {
    let Navigate = useNavigate();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
              localStorage.setItem("isAuth",true);
                setIsAuth(true);
                Navigate("/");
            })
    }
    return (
        <div className='login-box'>
            <p>Sign up with Google</p>
            <button className='login-btn' onClick={signIn}>Sign in with google</button>

        </div>
    )
}

export default Login