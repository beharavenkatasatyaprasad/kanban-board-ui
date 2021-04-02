import React, { useState } from "react";
import Item from "./Item";
import NewTaskModal from "./NewTaskModal";
import { SemipolarLoading } from "react-loadingg";

function Todo() {
  const [Todo, SetToDo] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (IsLoading) {
    return <SemipolarLoading />;
  } else {
    return (
      <>
        <div className="container col-sm-4 my-3">
          <p className="count p-2 header">
            <span className="badge badge-primary">{2}</span> To Do
          </p>
          <Item items={Todo} />
          <div className="btn-div text-center m-4">
            <button onClick={openModal} className="btn shadow btn-light">
              <i class="fa fa-plus" aria-hidden="true"></i> New Task
            </button>
          </div>
        </div>
        <NewTaskModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </>
    );
  }
}

export default Todo;
