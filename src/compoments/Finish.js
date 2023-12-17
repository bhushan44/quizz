import React from "react";

export default function Finish({ points, maxmarks, dispatch }) {
  return (
    <div>
      <strong>
        you scored {points} out of {maxmarks}
      </strong>
      <button onClick={() => dispatch({ type: "restart" })}>restart</button>
    </div>
  );
}
