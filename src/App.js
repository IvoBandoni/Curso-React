import React, { Component } from 'react';
import './App.css';

import "./components/NavBar";
import NavBar from "./components/NavBar"
import IconExampleDisabled from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"

class App extends Component {
  render() {
    return(
      <div className="App" >
        <NavBar />
        <IconExampleDisabled />
        <ItemListContainer />
      </div>
    );
  };
}

export default App;
