import React, { useState,useEffect } from "react";
import Item from "./Item";
import { SemipolarLoading } from "react-loadingg";

function InProgress() {
  const [InProgressTasks, setInProgressTasks] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  
  const getData = async() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `http://localhost:5000/inProgressTasks`,
      requestOptions
    );
    const data = await response.json()
    
    if(response.status === 202){
      setInProgressTasks(data.result)
      setIsLoading(false)
    }else{
    }
  }

  useEffect(() => {
    if(IsLoading) getData()
  })

  if (IsLoading) {
    return <SemipolarLoading />
  } else {
    const inProgressCards = InProgressTasks.map((task) =>{
      return <Item task={task} setIsLoading={setIsLoading} />
    })

    return (
      <div className="container col-sm-4 my-3">
        <p className="count p-2 header">
          <span className="badge badge-primary">{InProgressTasks.length}</span> In Progress
        </p>
        {inProgressCards}
      </div>
    );
  }
}

export default InProgress;
