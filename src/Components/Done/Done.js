import React, { useState ,useEffect} from "react";
import Item from "./Item";
import { SemipolarLoading } from "react-loadingg";

function InProgress() {
  const [DoneTasks, setDoneTasks] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  const getData = async() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      `http://localhost:5000/doneTasks`,
      requestOptions
    );
    const data = await response.json()
    
    if(response.status === 202){
      setDoneTasks(data.result)
      setIsLoading(false)
    }else{
    }
  }

  useEffect(() => {
    if(IsLoading) getData()
  })
  const DoneCards = DoneTasks.map((task) =>{
    return <Item task={task} setIsLoading={setIsLoading} />
  })
  if (IsLoading) {
    return <SemipolarLoading />
  } else {

    return (
      <div className="container col-sm-4 my-3">
        <p className="count p-2 header">
          <span className="badge badge-primary">{DoneTasks.length}</span> Done
        </p>
       {DoneCards}
      </div>
    );
  }
}

export default InProgress;
