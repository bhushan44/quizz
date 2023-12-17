import React from "react";

export default function Success({ numofque, dispatch }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>welcome to the react</h1>
      <h2 style={{ textAlign: "center" }}>
        {numofque} questions to test your react skills
      </h2>
      <button onClick={() => dispatch({ type: "start" })}>lets start</button>
    </div>
  );
}
