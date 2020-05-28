import React, { Component, useEffect } from "react";
import "./App.css";

import SmurfVillage from './SmurfVillage';
import NewSmurf from "./NewSmurf";


function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <h1>Welcome to your state management version of Smurfs!</h1>
      <NewSmurf />
      <SmurfVillage />
    </div>
  );
}

export default App;