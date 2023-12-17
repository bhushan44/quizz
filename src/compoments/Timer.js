import React, { useEffect } from "react";

export default function Timer({ remainingtime, dispatch }) {
  useEffect(function () {
    let id = setInterval(function () {
      dispatch({ type: "time" });
    }, 1000);
    return function () {
      clearInterval(id);
    };
  }, []);
  let min = Math.floor(remainingtime / 60);
  let sec = Math.abs(remainingtime % 60);
  return (
    <div>
      <stron>
        {min < 10 ? 0 : ""} {min}: {sec < 10 ? 0 : ""}
        {sec}
      </stron>
    </div>
  );
}
