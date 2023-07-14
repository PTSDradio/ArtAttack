import logo from './logo.svg';
import React, {useEffect, useState} from'react';
import './App.css';

function App() {
  const [img, setImg] = useState("")
  useEffect(()=> {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/2555`)
    .then(response => response.json())
    .then(data =>{
      console.log(data)
      setImg(data.primaryImage)})
  },[])

  return (
    <div className="App">
      <header className="App-header">
      <img src={img} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
