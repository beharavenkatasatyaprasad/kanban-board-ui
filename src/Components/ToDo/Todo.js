import React, { useState } from "react";
import Item from "./Item";

function Todo() {
  const [Todo, SetToDo] = useState([]);

  return (
    <div className="container my-3">
      <Item items={Todo} />
      <div className="btn-div text-center m-4">
        <button className="btn shadow btn-light">
          <i class="fa fa-plus" aria-hidden="true"></i>{' '}
          New Task
        </button>
      </div>
    </div>
  );
}

export default Todo;
