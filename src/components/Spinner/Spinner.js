import React from "react";
import spinner from "../Spinner/spinner.gif";
import "./Spinner";

function Spinner() {
  return (
    <img
      src={spinner}
      style={{
        width: "200px",
        marginLeft: "400px",
        marginTop: "200px",
        display: "inline-block",
      }}
      alt="Loading"
    ></img>
  );
}

export default Spinner;
