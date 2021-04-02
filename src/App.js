import "./App.css";
import Todo from "./Components/ToDo/Todo";
import InProgress from "./Components/Inprogress/InProgress";
import Done from "./Components/Done/Done";
import Navbar from "./Components/Navbar/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
            <Navbar />
        <Switch>
          <Route exact path="/">
            Home route
          </Route>
          <Route path="/todo" component={Todo}></Route>
          <Route path="/inprogress" component={InProgress}></Route>
          <Route path="/Done" component={Done}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
