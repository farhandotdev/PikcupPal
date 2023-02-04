import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./Components/Book";
import Home from "./Components/Home";
import Track from "./Components/Track";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
