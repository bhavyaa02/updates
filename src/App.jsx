import React, { useState } from "react";
import CompanyDropdown from "./components/CompanyDropdown";
import UpdatesList from "./components/UpdatesList";
import QuestionForm from "./components/QuestionForm";
import Forum from "./components/Forum";
import "./App.css";

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [response, setResponse] = useState("");
  const [forum, setForum] = useState([]);

  const companies = [
    { id: 1, name: "Company A" },
    { id: 2, name: "Company B" },
    { id: 3, name: "Company C" },
  ];

  const updates = {
    1: [
      {
        time: "2024-06-27 10:00 AM",
        title: "Important Announcement",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero at enim congue, sit amet ultricies quam tempus.",
      },
      {
        time: "2024-06-26 02:30 PM",
        title: "Update on Schedule",
        details:
          "Sed eget mauris turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eget risus erat. Sed vulputate vel nisi eu consectetur.",
      },
      {
        time: "2024-06-25 09:45 AM",
        title: "New Policy Announcement",
        details:
          "Vestibulum fermentum tincidunt tellus, a vehicula mauris efficitur eu. Nam nec tempus nisi. Ut feugiat pretium turpis, sit amet scelerisque orci accumsan nec.",
      },
    ],
    2: [], // Updates for Company B
    3: [], // Updates for Company C
  };

  const handleQuestionSubmit = (question) => {
    const newQuestion = {
      id: forum.length + 1,
      companyId: selectedCompany,
      question,
      answer: "",
      timestamp: new Date().toLocaleString(),
    };
    setForum([...forum, newQuestion]);
    setResponse("Question submitted successfully");
  };

  const handleOpenQuestionModal = () => {
    const dialog = document.getElementById("question-dialog");
    if (dialog) {
      dialog.showModal();
    }
  };

  const handleCloseQuestionModal = () => {
    const dialog = document.getElementById("question-dialog");
    if (dialog) {
      dialog.close();
    }
  };

  const clearFilter = () => {
    setSelectedCompany("");
    setResponse("");
    setForum([]);
  };

  return (
    <div className="app-container">
      <div className="row">
        <div className="col-md-6">
          <CompanyDropdown
            companies={companies}
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
          />
          <button className="btn-clear" onClick={clearFilter}>
            Clear Filter
          </button>
          {selectedCompany && (
            <>
              <UpdatesList updates={updates[selectedCompany]} />
              <div className="buttonContainer">
                <button className="primary" onClick={handleOpenQuestionModal}>
                  Ask a Question
                </button>
              </div>
              {response && <p className="text-success">{response}</p>}
            </>
          )}
        </div>
        <div className="col-md-6">
          {selectedCompany && (
            <Forum
              forum={forum.filter((q) => q.companyId === selectedCompany)}
            />
          )}
        </div>
      </div>
      <QuestionForm
        onSubmit={handleQuestionSubmit}
        handleCloseModal={handleCloseQuestionModal}
      />
    </div>
  );
};

export default App;
