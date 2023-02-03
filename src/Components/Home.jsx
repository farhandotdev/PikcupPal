import React from "react";
import Book from "./Book";
import Track from "./Track";

function Home() {
  return (
    <div>
      <ul>
        <div>
          <li>Logo</li>
        </div>
        <div>
          <li>Book</li>
          <li>Track</li>
          <li>Service</li>
        </div>
      </ul>
      <br />
      <div>
        <button>Book</button>
      </div>
      <br />
      <div>
        <button>
          <a href="{Track}">Track</a>
        </button>
      </div>
      <br />
      <label htmlFor="">Service</label>
      <br />
      <br />
      <br />
      <footer>
        <label htmlFor="">Footer</label>
      </footer>
    </div>
  );
}

export default Home;
