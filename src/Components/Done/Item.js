import React from "react";
import * as moment from "moment"

function Item(props) {
  
  let StartTime =  moment(props.task.StartedAt,"DD-MM-YYYY HH:mm:ss")
  let EndTime = moment(props.task.DoneAt,"DD-MM-YYYY HH:mm:ss")
  console.log(props)
  let ms = moment(EndTime, "DD-MM-YYYY HH:mm:ss").diff(
    moment(StartTime, "DD-MM-YYYY HH:mm:ss")
  );
  
  let Totalhours = ((ms / 1000 / 60 / 60) * 100) / 100;

  let cost =  Totalhours * props.task.pricing;

  return (
    <div className="card p-4 shadow my-2">
      <div className="row">
        <div className="col">
          <p className="p-0 m-0">
            <i className="fa fa-tasks" aria-hidden="true"></i> {' '}
            {props.task.tasklabel}
          </p>
          <p className="timer cost px-4 py-0 m-0">
            {"$ " +cost.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
