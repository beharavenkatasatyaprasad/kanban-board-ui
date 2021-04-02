import React, { useState } from "react";
import Item from "./Item";
import { SemipolarLoading } from "react-loadingg";

function InProgress() {
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  if (IsLoading) {
    return <SemipolarLoading />
  } else {
    return (
      <div className="container col-sm-4 my-3">
        <p className="count p-2 header">
          <span className="badge badge-primary">{2}</span> In Progress
        </p>
        <Item items={InProgressTasks} />
      </div>
    );
  }
}

export default InProgress;
