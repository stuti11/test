import React, { Component } from "react";
import "./App.css";
//import PersonItem from "./person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  incrementByOne() {
    this.setState({
      number: this.state.number + 1
    });
  }
  render() {
    return (
      <div className="App">
        <p>The value is: {this.state.number}</p>
        <button onClick={() => this.incrementByOne()}>Increment </button>
      </div>
    );
  }
}

export default App;
