import { useState } from "react";
import Questions from "./Questions.json";
import Results from "./Results";

const Trivia = () => {
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);


  const handleAnswerSelect = (questionNumber, answer) => {
    const newAnswers = { ...currentAnswers };
    newAnswers[questionNumber] = answer;
    setCurrentAnswers(newAnswers);
  };


  const handleSubmit = () => {
    let finalScore = 0;
    for (let i = 0; i < Questions.length; i++) {
      if (currentAnswers[i] === Questions[i].correct) {
        finalScore++;
      }
    }
    setScore(finalScore);
    setShowResults(true);
  };


  const restartQuiz = () => {
    setCurrentAnswers({});
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 p-4">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Quiz App</h1>

      {showResults ? (
        <Results score={score} totalQuestions={Questions.length} onRestart={restartQuiz} />
      ) : (
        <form>
          {Questions.map((question, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-semibold mb-2 text-red-700">
                Question {index + 1}/{Questions.length}
              </h2>
              <p className="mb-4 text-red-600">{question.question}</p>
              <div className="flex flex-col space-y-2">
                {question.options.map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer p-2 border rounded ${
                      currentAnswers[index] === option
                        ? "bg-red-500 text-white"
                        : "bg-blue-200 text-red-700"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={currentAnswers[index] === option}
                      onChange={() => handleAnswerSelect(index, option)}
                      className="hidden"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleSubmit}
            className="mt-4 bg-red-500 text-white py-2"
            disabled={Object.keys(currentAnswers).length < Questions.length}
          >
            Submit Quiz
          </button>
        </form>
      )}
    </div>
  );
};

export default Trivia;
