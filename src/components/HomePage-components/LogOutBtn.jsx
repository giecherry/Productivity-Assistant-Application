import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../UserContext';

const LogOutBtn = () => {

    const Navigate = useNavigate();
    const {handleLogOut} = useContext(UserContext)

    const handleClick = () =>{
        handleLogOut();
        Navigate('/');
    }
    

    return(
        <>
            <div className="logOutBtnContainer">
                <button className="logOutBtn" onClick={handleClick}><span className="material-symbols-outlined">logout</span></button>
            </div>
        </>
    )
}

export default LogOutBtn;