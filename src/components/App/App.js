import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Header from "../Header/Header";
import Main from "../Main/Main";
import CharacterCard from "../CharacterCard/CharacterCard";
import LocationCard from "../LocationCard/LocationCard";
import EpisodeCard from "../LocationCard/LocationCard";
import * as api from "../../utils/api";
function App() {
const [data, setData] = useState([]);
// console.log(data)
useEffect(()=>{
  api.getInfo().then(data =>{
    setData(data.results)
  })
}, [])


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route>
          <Main path="/" exact data={data}/>
        </Route>
        <Route>
          <CharacterCard path="/character/:id"/>
        </Route>
        <Route>
          <LocationCard path="/location/:id"/>
        </Route>
        <Route>
          <EpisodeCard path="/episode/:id"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
