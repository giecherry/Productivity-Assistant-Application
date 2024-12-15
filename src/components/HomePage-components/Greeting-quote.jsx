import { useState, useEffect } from "react"    
const GreetingAndQuote = () => {

    const [inUser, setInUser] = useState(JSON.parse(sessionStorage.getItem("Inloggad user:")) || "my friend"); 

    const [randomQuote, setRandomQuote] = useState([]);

    useEffect (() => {getQuote();},[])  
    const getQuote= async()=>{
        let response = await fetch("https://api.quotable.io/quotes/random")
        let json = await response.json()
        console.log(json[0].content)
        setRandomQuote(json[0]);
    }


    return (
        <>
            <h1>Welcome, {inUser} </h1>
            
            <h2><i>"{randomQuote.content}"</i></h2>
            <h4>- {randomQuote.author}</h4>
        </>
    )
}

export default GreetingAndQuote