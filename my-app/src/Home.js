import React from "react";
import UserCard from "./UserCard";
import CPUcard from "./CPUcard";
import Battle from "./Battle";


function Home(){
    return (
        <div className="home-screen">
            <UserCard />
            <Battle /> 
        </div>
    )
}

export default Home; 