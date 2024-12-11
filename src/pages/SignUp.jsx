import {Link} from 'react-router-dom'
import LogIn from "./LogIn"
import { useState, useEffect } from 'react'
import Logo from "../assets/logo.png"
import HomePage from './HomePage' 

const SignUp = () => { 
    const [userName, setUserName]= useState("")
    const [password, setPassword]= useState("")
    const [email, setEmail]= useState("")
    const [regUsers, setRegUsers] = useState(JSON.parse(localStorage.getItem("Registrerad users:")) || []); 

    useEffect(() => {
        console.log("Sparar värdet i storage...")
        localStorage.setItem("Registrerad users:", JSON.stringify(regUsers))
    },[regUsers])
    
    //Spara user info funktion
    const addData = () => {
        let newData = {userName, password, email};
        let updatedData = [...regUsers, newData]
        setRegUsers(updatedData);
    }

    //Funktion för att jämföra username och email  

    return (
        <>
            <h1>Sign Up</h1>
            <div className="signUpContainer">
                <div className="logo">
                    <img src={Logo} alt="Taskoo logo" />
                </div>
                <h1>Welcome to Taskoo</h1>
                <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Username"/>
                <input type="text" onChange={(e) => setEmail(e.target.value)}  placeholder="E-mail" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                <h5>Already a member? <Link to="/" element= {<LogIn/>}>Log in!</Link></h5>
                <button onClick={addData}>Sign in</button>
            </div>
            
        </>
    )
}

export default SignUp