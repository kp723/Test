import React, { Component, useState } from "react";
import { QUESTIONS } from "./questions";

// class App extends Component {
//  state = {
//  };
function App() {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  let TotalQuestions = Object.entries(QUESTIONS).length;

  function handleSubmit(e) {
    e.preventDefault();
    setShowResults(true);
    let resultArray = Object.entries(answers);
    console.log(resultArray[2]);

    let yesCount = 0;
    let NoCount = 0;
    resultArray.filter((x) => x[1] === "Yes").map((x) => yesCount++);
    resultArray.filter((x) => x[1] === "No").map((x) => NoCount++);
    console.log(yesCount, NoCount);
    setScore((yesCount / TotalQuestions) * 100);
  }

  const handleAnswerChange = (questionNumber, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: answer,
    }));
  };
  // console.log(answers);
  //  render() {
  return (
    <div className="main__wrap">
      <main className="container">
        <div>
          TODO
          <form>
            <ul>
              {Object.entries(QUESTIONS).map(([key, value]) => (
                <li key={key}>
                  {/* {`Question ${key} : ${value}`} */}
                  <p>{value}</p>
                  <label>
                    Yes
                    <input
                      type="radio"
                      name={`question${key}`}
                      value="Yes"
                      checked={answers[key] === "Yes"}
                      onChange={() => handleAnswerChange(key, "Yes")}
                    />
                  </label>
                  <label>
                    No
                    <input
                      type="radio"
                      name={`question${key}`}
                      value="No"
                      checked={answers[key] === "No"}
                      onChange={() => handleAnswerChange(key, "No")}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </form>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {showResults && (
          <div>
            <p>Your score is {Math.round(score)}%.</p>
          </div>
        )}
      </main>
    </div>
  );
  //  }
}

export default App;
