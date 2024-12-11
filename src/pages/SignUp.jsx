import {Link} from 'react-router-dom'
import LogIn from "./LogIn"
import { useState, useEffect } from 'react'

const SignUp = () => { 
    const [userName, setUserName]= useState("")
    const [password, setPassword]= useState("")
    const [email, setEmail]= useState("")
    const [myJSON, setJSON] = useState(JSON.parse(sessionStorage.getItem("Data")) || []); 

    useEffect(() => {
        console.log("Sparar värdet i storage...")
        sessionStorage.setItem("Data", JSON.stringify(myJSON))
    },[myJSON])
    
    //Spara user info funktion
    const addData = () => {
        let newData = 
        let updatedData = [...myJSON, newData]
        setMyJSON(updatedData);
    }
    return (
        <>
            <h1>Sign Up</h1>
            <div className="signUpContainer">
                <div className="logo">Logo</div>
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