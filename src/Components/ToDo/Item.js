import React from "react";

function Item(props) {
  return (
    <div className="card col-sm-4 p-4 shadow m-auto">
      <div className="row">
        <div className="col">
          <p>
            <i class="fa fa-tasks" aria-hidden="true"></i> {' '}
            Build a house
          </p>
        </div>
        <div className="col text-right">
          <button className="btn btn-primary">Start</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
