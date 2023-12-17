import logo from "./logo.svg";
import "./quizz.css";
import Header from "./compoments/Header";
import Menu from "./compoments/Menu";
import { useEffect, useReducer, useRef } from "react";
import Loading from "./compoments/Loading";
import Error from "./compoments/Error";
import Success from "./compoments/Success";
import Question from "./compoments/Question";
import Finish from "./compoments/Finish";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "datareceived":
        return {
          ...state,
          questions: action.payload,
          status: "ready",
        };
      case "start":
        return {
          ...state,
          status: "active",
          remainingtime: state.questions.length * 30,
        };
      case "newquestion":
        let question = state.questions[state.index];
        return {
          ...state,
          answer: action.payload,
          points:
            question.correctOption === action.payload
              ? state.points + question.points
              : state.points,
          // index: action.payload + 1,
        };
      case "next":
        return {
          ...state,
          index: action.payload,
          answer: null,
        };
      case "finish":
        return {
          ...state,
          status: "finish",
        };
      case "restart":
        return {
          ...state,
          // questions: [],
          index: 0,
          answer: null,
          points: 0,
          status: "ready",
          remainingtime: state.questions.length * 30,
        };
      case "time":
        return {
          ...state,
          remainingtime: state.remainingtime - 1,
          status: state.remainingtime === 0 ? "finish" : state.status,
        };

      default:
        return {
          ...state,
          status: "error",
        };
    }
  }

  let initialstate = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    remainingtime: null,
  };
  const [
    { questions, status, answer, index, points, remainingtime },
    dispatch,
  ] = useReducer(reducer, initialstate);
  useEffect(function () {
    function req() {
      fetch("http://localhost:8000/questions")
        .then((res) => res.json())
        .then((data) => dispatch({ type: "datareceived", payload: data }))
        .catch((e) => console.log(e));
    }
    req();
  }, []);
  let numofque = questions.length;
  let maxmarks = questions.reduce((prev, cur) => {
    return prev + cur.points;
  }, 0);

  return (
    <div>
      <Header></Header>
      <Menu>
        {status === "loading" && <Loading></Loading>}
        {status === "error" && <Error></Error>}
        {status === "ready" && (
          <Success numofque={numofque} dispatch={dispatch}></Success>
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
            index={index}
            numofque={numofque}
            points={points}
            maxmarks={maxmarks}
            remainingtime={remainingtime}
          ></Question>
        )}
        {status === "finish" && (
          <Finish
            points={points}
            maxmarks={maxmarks}
            dispatch={dispatch}
          ></Finish>
        )}
      </Menu>
    </div>
  );
}

export default App;
