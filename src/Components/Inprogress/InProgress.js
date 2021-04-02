import React, { useState } from "react";
import Item from "./Item";

function InProgress() {
  const [InProgressTasks, setInProgressTasks] = useState([]);
  return (
    <div className="container my-3">
      <Item items={InProgressTasks} />
    </div>
  );
}

export default InProgress;
