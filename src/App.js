import React, { Component } from 'react';
import './App.css';

import "./components/NavBar";
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return(
      <div className="App" >
        <NavBar />
        <h1>Clase 2</h1>
        <p>Texto</p>
      </div>
    );
  };
}

export default App;
