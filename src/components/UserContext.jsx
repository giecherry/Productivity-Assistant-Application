import { createContext, useState } from "react";


export const UserContext = createContext();

export function UserContextProvider ({children}){

        const [userName, setUserName]= useState("")
        const [password, setPassword]= useState("")
        const [regUsers, setRegUsers] = useState(JSON.parse(localStorage.getItem("Registrerad users:")) || []);
        const [inUser, setInUser] = useState(JSON.parse(sessionStorage.getItem("Inloggad user:")) || null); 
            
        const handleAdminData = () => {
            const adminEvents = [
                {
                    id: 70,
                    owner: "admin",
                    title: "Bi-weekly sync w/Alyne",
                    startDateTime:new Date("2024-12-16T09:30:00.000Z"),
                    endDateTime:new Date("2024-12-16T10:00:00.000Z")
                },
                {
                    id: 71,
                    owner: "admin",
                    title: "Weekly Planning",
                    startDateTime:new Date("2024-12-17T11:12:00.000Z"),
                    endDateTime:new Date("2024-12-17T12:12:00.000Z")
                },
                {
                    id: 72,
                    owner: "admin",
                    title: "Office closed",
                    startDateTime:new Date("2024-12-24T00:00:00.000Z"),
                    endDateTime:new Date("2024-12-27T00:00:00.000Z")
                },
                {
                    id: 73,
                    owner: "admin",
                    title: "Retro w51",
                    startDateTime:new Date("2024-12-18T14:30:00.000Z"),
                    endDateTime:new Date("2024-12-18T15:00:00.000Z")
                },
                {
                    id: 74,
                    owner: "admin",
                    title: "Studio StandUp",
                    startDateTime:new Date("2024-12-09T09:00:00.000Z"),
                    endDateTime:new Date("2024-12-09T10:00:00.000Z")
                },
                {
                    id: 75,
                    owner: "admin",
                    title: "TBW All-minds",
                    startDateTime:new Date("2024-12-19T15:00:00.000Z"),
                    endDateTime:new Date("2024-12-19T16:00:00.000Z")
                },
            ]

            if (inUser.userName === "admin") {
                localStorage.setItem("events", JSON.stringify(adminEvents));
            }
        }
    

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


    return(
        <UserContext.Provider value={{ handleLogIn, handleUserName, handlePassword, addNewUser, regUsers, inUser, userName, password, checkUser, handleAdminData}}>
            {children}
        </UserContext.Provider>
    )
}