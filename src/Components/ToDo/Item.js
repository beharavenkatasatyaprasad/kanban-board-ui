import React from "react";
import * as moment from 'moment'

function Item(props) {
  let date = new Date();

  const handleStart = () =>{
    console.log(date)
  }
  
  return (
    <div className="card p-4 shadow m-auto">
      <div className="row">
        <div className="col">
          <p>
            <i className="fa fa-tasks" aria-hidden="true"></i> {' '}
            Build a house
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
