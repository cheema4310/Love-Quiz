import React, { useState } from "react";

import "./ScoreBoard.css";

const ScoreBoard = (props) => {
  const [userEmail, setUserEmail] = useState("");

  const dataResult = props.result;

  let greatest = 0;

  for (let i = 0; i < 5; i++) {
    if (dataResult[i] > greatest) {
      greatest = dataResult[i];
    }
  }

  const findIndex = dataResult.indexOf(greatest);

  let winner;

  switch (findIndex) {
    case 0:
      winner = "Words of Affirmation";
      break;
    case 1:
      winner = "Quality Time";
      break;
    case 2:
      winner = "Recieving Gifts";
      break;
    case 3:
      winner = "Acts of Service";
      break;
    case 4:
      winner = "Physical Touch";
      break;

    default:
      break;
  }

  let secondWinner;

  let findNum;

  for (let i = 0; i < 5; i++) {
    if (dataResult[i] === greatest && i !== findIndex) {
      switch (i) {
        case 0:
          secondWinner = "Words of Affirmation";
          findNum = i;
          break;
        case 1:
          secondWinner = "Quality Time";
          findNum = i;
          break;
        case 2:
          secondWinner = "Recieving Gifts";
          findNum = i;
          break;
        case 3:
          secondWinner = "Acts of Service";
          findNum = i;
          break;
        case 4:
          secondWinner = "Physical Touch";
          findNum = i;
          break;

        default:
          break;
      }
    }
  }

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    console.log(userEmail);
    setUserEmail("");
  };

  return (
    <div className="score-board">
      <div className="score-board__main">
        <div className="score-board__textWrapper">
          <h3>Your &#10084; language is : {winner}</h3>
          <h5>
            Knowing the love language is powerful, but knowing how they work in
            your relationships that's the game changer.
          </h5>
        </div>
        <div className="dropShadow">
          <div className="score-board__card">
            <table className="score-board__table">
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className={`${findIndex === 0 && "textColorWinner"} ${
                    findNum === 0 && "textColorWinner"
                  }`}
                >
                  <td>Words of Affirmation</td>
                  <td className="tVal">{dataResult[0]}</td>
                </tr>
                <tr
                  className={`${findIndex === 1 && "textColorWinner"} ${
                    findNum === 1 && "textColorWinner"
                  }`}
                >
                  <td>Quality Time</td>
                  <td className="tVal">{dataResult[1]}</td>
                </tr>
                <tr
                  className={`${findIndex === 2 && "textColorWinner"} ${
                    findNum === 2 && "textColorWinner"
                  }`}
                >
                  <td>Recieving Gifts</td>
                  <td className="tVal">{dataResult[2]}</td>
                </tr>
                <tr
                  className={`${findIndex === 3 && "textColorWinner"} ${
                    findNum === 3 && "textColorWinner"
                  }`}
                >
                  <td>Acts of Service</td>
                  <td className="tVal">{dataResult[3]}</td>
                </tr>
                <tr
                  className={`${findIndex === 4 && "textColorWinner"} ${
                    findNum === 4 && "textColorWinner"
                  }`}
                >
                  <td>physical touch</td>
                  <td className="tVal">{dataResult[4]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="score-board__email">
        <form onSubmit={handleEmailSubmit} className="score-board__email-form">
          <input
            type="email"
            value={userEmail}
            onChange={handleEmailChange}
            placeholder="example@gmail.com"
            required
          />
          <button type="submit">Advise me</button>
        </form>
        <p className="score-board__email-h">
          To get notified <u>how to communicate</u> & which{" "}
          <u>actions to take</u> in quest of perfect Relationship.
        </p>
      </div>
    </div>
  );
};

export default ScoreBoard;
