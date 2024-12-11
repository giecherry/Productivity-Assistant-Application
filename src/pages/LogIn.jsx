import {Link} from 'react-router-dom'
import SignUp from "./SignUp"
import Logo from "../assets/logo.png"

const LogIn = () => {

        //Logga in funktion
        const saveData = () => {
            let newData = [
                
            ]
            setMyJSON(newData);
        }

        //Error message när man inte är regristrerad eller fel lösenord
    return (
        <>
            <h1>Log In</h1>
            <div className="logInContainer">
                <div className="logo">
                    <img src={Logo} alt="Taskoo logo" />
                </div>
                <h1>Welcome to Taskoo</h1>
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password'/>
                <h5>Are you new? <Link to="/signup" element= {<SignUp/>} >Sign up!</Link></h5>
                <button>Log in</button>
            </div>
            
        </>
    )
}

export default LogIn