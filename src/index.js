import React from "react";
import ReactDOM from "react-dom";

const name = "Diego";
const year = "2022";
const data = "23/02/2022";

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
    <p>Today's date is: {data}</p>
  </div>,
  document.getElementById("root")
);
