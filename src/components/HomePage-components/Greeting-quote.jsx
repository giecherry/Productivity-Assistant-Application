import { useState, useEffect } from "react"  
import { useContext } from 'react';
import { UserContext } from '../UserContext';  
import HomePageCSS from "./HomePage.module.css"
const GreetingAndQuote = () => {

    const [randomQuote, setRandomQuote] = useState([]);
    const {inUser} = useContext(UserContext)

    useEffect (() => {
        getQuote();
    },[])
    const getQuote= async()=>{
        let response = await fetch("https://api.quotable.io/quotes/random")
        let json = await response.json()
        setRandomQuote(json[0]);
    }

    return (
        <>
            <div className={HomePageCSS.greetingContainer}>
                <h1>Welcome, {inUser?.userName || "Guest"}</h1>
                <h2><i>"{randomQuote.content}"</i></h2>
                <h4>- {randomQuote.author}</h4>
            </div>
            
        </>
    )
}

export default GreetingAndQuote