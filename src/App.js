import React, { Component } from 'react';
import './App.css';

import "./components/NavBar";
import NavBar from "./components/NavBar"
import IconExampleDisabled from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"

class App extends Component {
  render() {
    return(
      <div className="App" >
        <NavBar />
        <IconExampleDisabled />
        <ItemListContainer />
        <ItemCount />
      </div>
    );
  };
}

export default App;
