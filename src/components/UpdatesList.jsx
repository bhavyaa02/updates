import React from "react";

const UpdatesList = ({ updates }) => {
  return (
    <div className="updates-list">
      <h2>Announcements</h2>
      <p>Displaying the Recent Updates of the Company</p>
      <div className="line"></div>

      {updates.length > 0 ? (
        <table className="updates-table">
          <thead>
            <tr>
              <th>Date & Time</th>
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
      ) : (
        <p>No announcements available for this company.</p>
      )}
    </div>
  );
};

export default UpdatesList;
