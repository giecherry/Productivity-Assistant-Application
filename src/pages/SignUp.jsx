import {Link} from 'react-router-dom'
import LogIn from "./LogIn"
import { useEffect } from 'react'
import Logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../components/UserContext';

const SignUp = () => { 
    const Navigate = useNavigate();
    const {handleUserName, handlePassword, regUsers, addNewUser, inUser} = useContext(UserContext)

    useEffect(() => {
        localStorage.setItem("Registrerad users:", JSON.stringify(regUsers))
    },[regUsers])

    const handleClick = () => {
        addNewUser();
        Navigate('/');
    }

    return (
        <div className="SignUpBody">
            <div className="signUpContainer">
                <div className="logo">
                    <img src={Logo} alt="Taskoo logo" />
                </div>
                <h1>Welcome to Taskoo</h1>
                <input type="text" onChange={handleUserName} placeholder="Username"/>
                <input type="text" placeholder="E-mail" />
                <input type="password" onChange={handlePassword} placeholder='Password'/>
                <h5>Already a member? <Link to="/" element= {<LogIn/>}>Log in!</Link></h5>
                <button onClick={handleClick}>Sign in</button>
            </div>
            
        </div>
    )
}

export default SignUp