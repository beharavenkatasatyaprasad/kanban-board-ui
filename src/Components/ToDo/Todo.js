import React, { useState } from "react";
import Item from "./Item";

function Todo() {
  const [Todo, SetToDo] = useState([]);

  return (
    <div className="container col-sm-4 my-3">
      <p className="count p-2 header">
        <span className="badge badge-primary">{2}</span> 
        {' '}To Do
      </p>
      <Item items={Todo} />
      <div className="btn-div text-center m-4">
        <button className="btn shadow btn-light">
          <i class="fa fa-plus" aria-hidden="true"></i> New Task
        </button>
      </div>
    </div>
  );
}

export default Todo;
