import React, {useState, useEffect}from "react";
import CardDisplay from "./CardDisplay";
function GenerateNewCard(){
  const [cardArr, setCardArr] = useState([]);
    let array = [];
    
    // let card = () => {
    //     fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 80000)}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // console.log(randomNumber);
    //         if (data.isPublicDomain === true && data.primaryImage.includes("http")&&data.message !== "ObjectID not found") {
    //             // use data
    //             // console.log(data);
    //             return (data)
    //         }
    //         else {
    //             card();
    //         }
          
    //     });    }

    const funky = () =>  Promise.all([
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 80000)}`),
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 80000)}`),
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${Math.floor(Math.random() * 80000)}`)
    ]).then(function(responses){
        return Promise.all(responses.map(function(response){
            return response.json();
        }));
    }).then(function(data){
        
        for (let i = 0; i < 3; i++) {
        if (data[i].isPublicDomain === true && data[i].primaryImage.includes("http")&&data[i].message !== "ObjectID not found" && array.length < 3) {
                        // use data
                        // console.log(data);

                        array = [...array, data[i]]
                        // console.log("array: ", array);
                    }
                    if (data[i].message === "ObjectID not found" || data[i].message === "Not a valid object") {
                        funky();
                    }
                    // Object.assign(array)
                    // setCardArr(array);
                }
            
        console.log("data: ",data);
        console.log("array: ", array);
    }).catch(function(error){
        console.log(error);
    });
    
    funky()
    return (
        <div className="flex-container">
            <h1> Generate New Card </h1>
            <div>
        {array.map((array) => (
          <CardDisplay array={array} key={array.id}/>
        ))}
      </div>
        </div>
    )
}

export default GenerateNewCard; 