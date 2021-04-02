import React, { useState } from "react";
import Item from "./Item";

function InProgress() {
  const [InProgressTasks, setInProgressTasks] = useState([]);
  return (
    <div className="container col-sm-4 my-3">
      <p className="count p-2 header">
        <span className="badge badge-primary">{2}</span> In Progress
      </p>
      <Item items={InProgressTasks} />
    </div>
  );
}

export default InProgress;
