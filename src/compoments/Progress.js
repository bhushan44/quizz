import React from "react";

export default function Progress({
  answer,
  index,
  numofque,
  points,
  maxmarks,
}) {
  return (
    <div>
      <progress max={15} value={index + Number(answer !== null)}></progress>
      <p>
        <strong>{index}</strong>/<strong>{numofque}</strong>
      </p>
      <p>
        {" "}
        <strong>{points}</strong>/<strong>{maxmarks}</strong>
        {/* {maxmarks} */}
      </p>
    </div>
  );
}
