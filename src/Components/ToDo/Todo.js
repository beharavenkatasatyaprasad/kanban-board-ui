import React, { useState, useEffect } from "react";
import Item from "./Item";
import NewTaskModal from "./NewTaskModal";
import { SemipolarLoading } from "react-loadingg";

function Todo() {
  const [Todo, SetToDo] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [IsLoading, setIsLoading] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  const getData = async() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `http://localhost:5000/ToDoTasks`,
      requestOptions
    );
    const data = await response.json()
    
    if(response.status === 202){
      SetToDo(data.result)
      setIsLoading(false)
    }else{
    }
  }
  useEffect(() => {
    if(IsLoading) getData()
  })
  

  if (IsLoading) {
    return <SemipolarLoading />;
  } else {
    const toDoCards = Todo.map((task) =>{
      return <Item task={task} setIsLoading={setIsLoading} />
    })
    return (
      <>
        <div className="container col-sm-4 my-3">
          <p className="count p-2 header">
            <span className="badge badge-primary">{Todo.length}</span> To Do
          </p>
         {toDoCards}
          <div className="btn-div text-center m-4">
            <button onClick={openModal} className="btn shadow btn-light">
              <i className="fa fa-plus" aria-hidden="true"></i> New Task
            </button>
          </div>
        </div>
        <NewTaskModal modalIsOpen={modalIsOpen} closeModal={closeModal} setIsLoading={setIsLoading} />
      </>
    );
  }
}

export default Todo;
