import React from "react";
import "../quizz.css";
export default function Options({ option, question, answer, dispatch, index }) {
  let isanswer = answer === null;
  console.log(isanswer);
  return (
    <div className="options" key={option}>
      <button
        className={`option  ${
          !isanswer
            ? index === question.correctOption
              ? "correct"
              : "wrong"
            : ""
        }`}
        onClick={() => dispatch({ type: "newquestion", payload: index })}
        key={option}
        disabled={answer !== null}
      >
        {option}
      </button>
    </div>
  );
}
