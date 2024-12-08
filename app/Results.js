const Results = ({ score, totalQuestions, onRestart }) => {
    return (
      <div className="w-full max-w-md bg-blue-200 shadow-lg p-4">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Quiz Completed!</h2>
        <p className="mb-4 text-red-700">
          Your Score: <strong>{score}/{totalQuestions}</strong>
        </p>
        <button
          onClick={onRestart}
          className="w-full bg-red-500 text-white py-2"
        >
          Restart Quiz
        </button>
      </div>
    );
  };
  
  export default Results;
  