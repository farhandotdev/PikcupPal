import React, { Component } from "react";
import Track from "./Track";
import Book from "./Book";

class Route extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Book}></Route>
          <Route path="/Track" component={Track}></Route>
        </Router>
      </div>
    );
  }
}

React.render(<Route />);
