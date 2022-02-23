import React from "react";
import ReactDOM from "react-dom";
const data = "23/02/2022";
const img = "bacon.png";
ReactDOM.render(
  <div>
    <img src={img}></img>
    <h1 class="headding">My Favorit List foods</h1>
    <ol>
      <li>Bacon</li>
      <li>Pasta</li>
      <li>Rice</li>
    </ol>
    <p>Today's date is: {data}</p>
  </div>,
  document.getElementById("root")
);
