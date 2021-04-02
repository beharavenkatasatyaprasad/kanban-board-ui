import React, { useEffect, useState } from "react";
import * as moment from "moment";

function Item(props) {
  const [Timer, setTimer] = useState("HH:MM:SS");

  setInterval(() => {
    let then = moment(props.task.StartedAt,"DD-MM-YYYY HH:mm:ss");
    let now = moment().format("DD-MM-YYYY HH:mm:ss");
    let ms = moment(now, "DD-MM-YYYY HH:mm:ss").diff(
      moment(then, "DD-MM-YYYY HH:mm:ss")
    );

    let counter = moment(+ms).subtract({hours:5,minutes:30}).format("HH:mm:ss")

    setTimer(counter);
  }, 1000);

  const handleResolve = async () =>{

    let data= {
      id: props.task._id
    }
    
    let requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(data)
    };

    const response = await fetch(
      `http://localhost:5000/resolveTask`,
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
          <p className="p-0 m-0">
            <i className="fa fa-tasks" aria-hidden="true"></i>{" "}
            {props.task.tasklabel}
          </p>
          <p className="timer cost px-4 py-0 m-0">{Timer}</p>
        </div>
        <div className="col text-right py-0"> 
          <button onClick={handleResolve} className="btn btn-success">Resolve</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
