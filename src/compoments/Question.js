import React from "react";
import Options from "./Options";
import Progress from "./Progress";
import Nextbutton from "./Nextbutton";
import Footer from "./Footer";
import Timer from "./Timer";

export default function Question({
  question,
  answer,
  dispatch,
  index,
  numofque,
  points,
  maxmarks,
  remainingtime,
}) {
  return (
    <div>
      <Progress
        index={index}
        numofque={numofque}
        points={points}
        maxmarks={maxmarks}
        answer={answer}
      ></Progress>
      <h1 style={{ textAlign: "center" }}>{question.question}</h1>
      <div className="options">
        {question.options.map((option, i) => (
          <Options
            option={option}
            question={question}
            answer={answer}
            dispatch={dispatch}
            index={i}
            key={option}
          ></Options>
        ))}
      </div>
      <Footer>
        <>
          <Nextbutton
            numofque={numofque}
            answer={answer}
            dispatch={dispatch}
            index={index}
          ></Nextbutton>
          <Timer remainingtime={remainingtime} dispatch={dispatch}></Timer>
        </>
      </Footer>
      {/* <Nextbutton
        numofque={numofque}
        answer={answer}
        dispatch={dispatch}
        index={index}
      ></Nextbutton> */}
      {/* {answer !== null && (
        <button onClick={() => dispatch({ type: "next", payload: index + 1 })}>
          next
        </button>
      )} */}
    </div>
  );
}
