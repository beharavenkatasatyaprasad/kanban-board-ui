import React from "react";

function Item(props) {
  let date = new Date();

  const handleStart = async () =>{
    const data= {
      id: props.task._id
    }
    
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(data)
    };

    const response = await fetch(
      `http://localhost:5000/startTask`,
      requestOptions
    );
    
    if(response.status === 202){
      props.setIsLoading(true);
    }
    
  }
  
  return (
    <div className="card p-4 shadow my-2">
      <div className="row">
        <div className="col">
          <p>
            <i className="fa fa-tasks" aria-hidden="true"></i> {' '}
            {props.task.tasklabel}
          </p>
        </div>
        <div className="col text-right">
          <button onClick={handleStart} className="btn btn-primary">Start</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
