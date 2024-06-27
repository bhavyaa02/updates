import React from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri"; // Assuming you're using this icon for stickers

const UpdatesList = ({ updates }) => {
  return (
    <div className="table-container">
      <div className="perfectMatch">
        <h2>Announcemnts</h2>
        <p>Displaying the Recent Updates of the Company</p>
        <div className="line"></div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Time and Date</th>
            <th>Title</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {updates.map((update, index) => (
            <tr key={index}>
              <td>{update.time}</td>
              <td>{update.title}</td>
              <td>{update.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdatesList;
