import { useEffect, useState } from "react"
import GreetingAndQuote from "../components/HomePage-components/Greeting-quote"

const HomePage = () => {

/*     let [random, setRandom] = useState([]);

    useEffect (() => {getRandom();},[])
    const getRandom = async () => {
        let response = await fetch("https://api.quotable.io/quotes/random")
        let json = await response.json();
        setRandom(json.result);
    }
    if(location.state){
        setRandom(location.state);
    }
 */
    return (
        <>
            <GreetingAndQuote/>
            {/* <h1>hej</h1>
            <h2>Hello xxx here is a fun quote for you {random}</h2> */}
        </>
    )   
}

export default HomePage
