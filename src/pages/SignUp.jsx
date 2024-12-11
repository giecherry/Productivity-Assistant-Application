import {Link} from 'react-router-dom'
import LogIn from "./LogIn"

const SignUp = () => {
    return (
        <>
            <h1>Sign Up</h1>
            <div className="signUpContainer">
                <div className="logo">Logo</div>
                <h1>Welcome to Taskoo</h1>
                <input type="text" placeholder="Username"/>
                <input type="text" placeholder="E-mail" />
                <input type="password"/>
                <h5>Already a member? <Link to="/" element= {<LogIn/>}>Log in!</Link></h5>
                <button>Sign in</button>
            </div>
            
        </>
    )
}

export default SignUp