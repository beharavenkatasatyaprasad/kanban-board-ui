import React from "react";

function Item(props) {
  return (
    <div className="card p-4 shadow m-auto">
      <div className="row">
        <div className="col">
          <p className="p-0 m-0">
            <i className="fa fa-tasks" aria-hidden="true"></i> {' '}
            Build a house
          </p>
          <p className="timer cost px-4 py-0 m-0">
            $5.15
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
