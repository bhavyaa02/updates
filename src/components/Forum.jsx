import React, { useState } from "react";

const Forum = ({ forum, onAnswerSubmit }) => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState("");

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleAnswerSubmit = () => {
    if (selectedQuestion && answer) {
      onAnswerSubmit(selectedQuestion, answer);
      setSelectedQuestion(null);
      setAnswer("");
    }
  };

  return (
    <div className="forum-container">
      <h2>Forum</h2>
      <div className="tabs">
        <button className="tab">All</button>
        <button className="tab">Recent</button>
        <button className="tab">Unanswered</button>
      </div>
      {forum &&
        forum.map(({ id, question, answer, timestamp }) => (
          <div key={id} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Q: {question}</h5>
              <p className="card-text"><small>Posted on: {timestamp}</small></p> {/* Display timestamp */}
              {answer ? (
                <p className="card-text">A: {answer}</p>
              ) : (
                selectedQuestion === id && (
                  <>
                    <textarea
                      value={answer}
                      onChange={handleAnswerChange}
                      placeholder="Type your answer here"
                    ></textarea>
                    <button onClick={handleAnswerSubmit}>Submit</button>
                  </>
                )
              )}
              {!answer && (
                <button onClick={() => setSelectedQuestion(id)}>
                  Answer
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Forum;
