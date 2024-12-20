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
            if (regUsers.some(user => user.userName === userName)) {
                alert("Username already exists.");
                return;
            }
            else {
                let newUserData = {userName, password};
                let updatedRegUsers = [...regUsers, newUserData];
                setRegUsers(updatedRegUsers);
                localStorage.setItem("Registrerad users:", JSON.stringify(updatedRegUsers));
                console.log("Registered users:", updatedRegUsers);
                alert("User registered successfully!");}
            
        }
        const handleLogIn = () => {
            let newInUserData = {userName, password};
            setInUser(newInUserData);
            sessionStorage.setItem("Inloggad user:", JSON.stringify(newInUserData));
            console.log("Inloggad user:",inUser)
        }

        const checkUser = () => {
            console.log(regUsers);
            let user = regUsers.find(user => user.userName === userName && user.password === password);
            return user;
        }

        const handleLogOut = () =>{
            setInUser([])
        }


    return(
        <UserContext.Provider value={{ handleLogIn, handleUserName, handlePassword, addNewUser, regUsers, inUser, userName, password, checkUser, handleLogOut}}>
            {children}
        </UserContext.Provider>
    )
}