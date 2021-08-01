//import logo from "./logo.svg";
//import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import Todo from "./components/Todo";
//import Task from "./components/TaskRow";
//import Done from "./components/DoneRow";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Todo />
          {/* pending */}
          {/* pending */}
          {/* pending */}
          {/* <Task /> */}
          {/* done */}
          {/* done */}
          {/* done */}
          {/* <Done /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
