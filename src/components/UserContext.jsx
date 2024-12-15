import { createContext, useState } from "react";


export const UserContext = createContext();

export function UserContextProvider ({children}){

        const [userName, setUserName]= useState("")
        const [password, setPassword]= useState("")
        const [regUsers, setRegUsers] = useState(JSON.parse(localStorage.getItem("Registrerad users:")) || []);
        const [inUser, setInUser] = useState(JSON.parse(sessionStorage.getItem("Inloggad user:")) || null); 
    

        const handleUserName = (e) => {
            setUserName(e.target.value);
        }

        const handlePassword = (e) => {
            setPassword(e.target.value);
        }
        const addNewUser = () => {
            let newUserData = {userName, password};
            let updatedRegUsers = [...regUsers, newUserData];
            setRegUsers(updatedRegUsers);
            localStorage.setItem("Registrerad users:", JSON.stringify(updatedUsers));
            console.log("Registered users:", updatedUsers);
        }
        const handleLogIn = () => {
            let newInUserData = {userName, password};
            setInUser(newInUserData);
            sessionStorage.setItem("Inloggad user:", JSON.stringify(newInUserData));
            console.log("Inloggad user:",inUser)
        }


    return(
        <UserContext.Provider value={{ handleLogIn, handleUserName, handlePassword, addNewUser, regUsers, inUser, userName, password}}>
            {children}
        </UserContext.Provider>
    )
}