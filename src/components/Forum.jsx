import React, { useState } from "react";

const Forum = ({ forum }) => {
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
              <p className="card-text"><small>Posted on: {timestamp}</small></p>
              {answer && (
                <p className="card-text">A: {answer}</p>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Forum;
