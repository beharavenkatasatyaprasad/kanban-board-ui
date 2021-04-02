import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="text-center p-2"> 
        <Link className="btn btn-primary mx-2" to="/todo">To do</Link>
        <Link className="btn btn-primary mx-2" to="/inprogress">In Progress</Link>
        <Link className="btn btn-primary mx-2" to="/done">Done</Link>
      </nav>
    </div>
  );
}

export default Navbar;
