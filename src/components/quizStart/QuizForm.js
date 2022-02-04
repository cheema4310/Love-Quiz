import { React, useState } from "react";

import ScoreBoard from "../scoreBoard/ScoreBoard";
import QuizRadioInputs from "./QuizRadioInputs";
import qData from "../../qData";
import bgImg from "../../assests/image-from-rawpixel-id-2429786-png.png";

import "./quizForm.css";

const QuizForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [showScore, setShowScore] = useState(false);

  const [words, setWords] = useState(0);
  const [time, setTime] = useState(0);
  const [gift, setGift] = useState(0);
  const [service, setService] = useState(0);
  const [touch, setTouch] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();

    switch (selected) {
      case "A":
        setWords((pv) => ++pv);
        setSelected("");
        break;
      case "B":
        setTime((pv) => ++pv);
        setSelected("");
        break;
      case "C":
        setGift((pv) => ++pv);
        setSelected("");
        break;
      case "D":
        setService((pv) => ++pv);
        setSelected("");
        break;
      case "E":
        setTouch((pv) => ++pv);
        setSelected("");
        break;

      default:
        break;
    }

    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);

    if (nextQuestion + 2 > qData.length) {
      setShowScore(true);
    }
  };

  const onValueChange = (e) => {
    setSelected(e.target.value);
  };

  const result = [words, time, gift, service, touch];

  const radioCheck = qData[currentQuestion].question.map((q) => (
    <QuizRadioInputs
      onChange={onValueChange}
      q={q}
      currentQuestion={currentQuestion}
      key={currentQuestion + q.ans}
    />
  ));
  const bgStyleImg = {
    background: `url(${bgImg})`,
  };

  return (
    <section className="quizStart" style={bgStyleImg}>
      {showScore ? (
        <ScoreBoard result={result} />
      ) : (
        <form className="quiz-form" onSubmit={formHandler}>
          <h3 className="quiz-heading">It's more meaningful to me when...</h3>
          <div className="quiz-inputs">{radioCheck}</div>
          <div className="quiz-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </section>
  );
};
export default QuizForm;
