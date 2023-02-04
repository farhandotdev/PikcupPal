import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import {Routh, Switch} from "react-router-dom";
import Book from "./Components/Book";
import Track from "./Components/Track";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Routh path="/" component={Home}/>
          <Routh path="/book" component={Book}/>
          <Routh path="/track" component={Track}/>
        </Switch>
      </div>
    );
  }
}

export default App;
