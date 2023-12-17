import React from "react";

export default function Nextbutton({ answer, dispatch, index, numofque }) {
  if (answer === null) return;
  if (index < numofque - 1)
    return (
      <button onClick={() => dispatch({ type: "next", payload: index + 1 })}>
        next
      </button>
    );

  return (
    <div>
      <button onClick={() => dispatch({ type: "finish" })}>finish</button>
    </div>
  );
}
