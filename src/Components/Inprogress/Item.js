import React from "react";

function Item(props) {
  return (
    <div className="card p-4 shadow m-auto">
      <div className="row">
        <div className="col">
          <p className="p-0 m-0">
            <i class="fa fa-tasks" aria-hidden="true"></i> {' '}
            Build a house
          </p>
          <p className="timer cost px-4 py-0 m-0">
            00:08:43
          </p>
        </div>
        <div className="col text-right py-0">
          <button className="btn btn-success">Resolve</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
