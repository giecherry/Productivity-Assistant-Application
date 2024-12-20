import {Link} from 'react-router-dom'
import SignUp from "./SignUp"
import Logo from "../assets/logo.png"
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

const LogIn = () => {
    const Navigate = useNavigate();
    const {handleUserName, handlePassword, inUser, handleLogIn, checkUser, handleAdminData} = useContext(UserContext)

    useEffect(() => {
        sessionStorage.setItem("Inloggad user:", JSON.stringify(inUser))
    },[inUser])

    const handleClick = () => {
        if(checkUser() === undefined){
            alert("Wrong username or password. Try again!");
        }
        else {handleLogIn();
        Navigate('/home');
        }
        handleAdminData();
    }

    return (
        <div className='logInBody'>
            <div className="logInContainer">
                <div className="logo">
                    <img src={Logo} alt="Taskoo logo" />
                </div>
                <h1>Welcome to Taskoo</h1>
                <input type="text" onChange={handleUserName} placeholder='Username' />
                <input type="password" onChange={handlePassword} placeholder='Password'/>
                <h5>Are you new? <Link to="/signup" element= {<SignUp/>} >Sign up!</Link></h5>
                <button onClick={handleClick}>Log in</button>
            </div>
            
        </div>
    )
}

export default LogIn