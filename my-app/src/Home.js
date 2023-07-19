import React from "react";
import Battle from "./Battle";
import CardDisplay from "./CardDisplay";


function Home(){
    return (
        <div className="home-screen">
            <CardDisplay />
            <Battle /> 
        </div>
    )
}

export default Home; 