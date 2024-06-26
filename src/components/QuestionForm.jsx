import React, { useState } from "react";

const QuestionForm = ({ onSubmit, handleCloseModal }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (question.trim() !== "") {
      onSubmit(question);
      setQuestion("");
      handleCloseModal();
    }
  };

  return (
    <dialog id="question-dialog" className="modal">
      <div className="modal-content">
        <h2>Ask a Question</h2>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          style={{
            height: "50px", // Set the height of the textarea
            width: "100%", // Set the width of the textarea
            fontSize: "18px", // Set the font size of the placeholder text
            textAlign: "center", // Center the placeholder text
          }}
        />
        <div className="button-group">
          <button className="primary" onClick={handleSubmit}>
            Submit
          </button>
          <button className="secondary" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default QuestionForm;
