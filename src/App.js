import Todo from "./Components/ToDo/Todo";
import InProgress from "./Components/Inprogress/InProgress";
import Done from "./Components/Done/Done";
import React from "react";
function App() {

  
  return (
    <div className="container-fluid row">
      <div className="col">
        <Todo />
      </div>
      <div className="col">
        <InProgress />
      </div>
      <div className="col" >
        <Done />
      </div>
    </div>
  );
}

export default App;
