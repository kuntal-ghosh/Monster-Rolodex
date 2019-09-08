import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    monsters: [
      {
        name: "arnob",
        id: 1
      },
      {
        name: "Aryan",
        id: 2
      }
    ]
  };
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
