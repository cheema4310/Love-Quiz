const QuizRadioInputs = (props) => {
  const q = props.q;

  return (
    <div className="quiz-radio-inputs">
      <label htmlFor={q.ans} className="quiz-label">
        <input
          className="quiz-label__input"
          type="radio"
          id={q.ans}
          name="entry"
          value={q.ans}
          onChange={props.onChange}
          // required
        />
        <span className="custom-checkbox"></span>
        {q.txt}
      </label>
    </div>
  );
};

export default QuizRadioInputs;
