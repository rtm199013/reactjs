import React from "react";

import AddTask from "./AddTask";
import PendingRow from "./PendingRow";
import DoneRow from "./DoneRow";

class Todo extends React.Component {
  state = {
    tasks: [
      { name: "eat", status: "pending" },
      { name: "code", status: "pending" },
      { name: "sleep", status: "done" },
      { name: "nap", status: "pending" },
      { name: "snack", status: "pending" },
    ],
    newTask: "initials",
  };

  pendingToDone = (task) => {
    let tasksCopy = [...this.state.tasks];

    let tastToUpdateIndex = tasksCopy.findIndex((i) => i.name === task);

    tasksCopy[tastToUpdateIndex].status = "done";

    this.setState({
      tasks: tasksCopy,
    });

    let totalPending = tasksCopy.filter((i) => i.status === "pending");
    //console.log(totalPending);

    if (totalPending.length <= 0) {
      //alert("Done All");
      let noPending = true;
    }
  };

  deletePending = (task) => {
    let tasksCopy = [...this.state.tasks];
    let tastToUpdateIndex = tasksCopy.findIndex((i) => i.name === task);
    // alert(tastToUpdateIndex);
    tasksCopy[tastToUpdateIndex].status = "deleted";
    this.setState({
      tasks: tasksCopy,
    });
    alert("deleted" + task);
  };

  doneUpdate = (task) => {
    let tasksCopy = [...this.state.tasks];
    let tastToUpdateIndex = tasksCopy.findIndex((i) => i.name === task);
    // alert(tastToUpdateIndex);
    tasksCopy[tastToUpdateIndex].status = "finished";
    this.setState({
      tasks: tasksCopy,
    });
    // alert("Finished Task: " + task + "!");
  };

  addNewTask = (a) => {
    alert("Added New Task!" + a);

    let taskToAdd = { name: a, status: "pending" };
    let tasksCopy = [...this.state.tasks];
    tasksCopy.unshift(taskToAdd);

    this.setState({
      tasks: tasksCopy,
    });
  };

  inputHandler = (newItemTask) => {
    this.setState({
      newTask: newItemTask,
    });
  };

  render() {
    let allPending = this.state.tasks.filter((i) => i.status === "pending");
    let allDone = this.state.tasks.filter((i) => i.status === "done");

    // let NoDone = <div></div>
    // console.log(allPending);
    // console.log(allDone);
    return (
      <div>
        {/* new */}
        {/* new */}
        {/* new */}
        <AddTask
          data={this.state.newTask}
          inputHandler={this.inputHandler}
          addNewTask={this.addNewTask}
        />

        <PendingRow
          data={allPending}
          pendingToDone={this.pendingToDone}
          deletePending={this.deletePending}
        />
        <DoneRow data={allDone} doneUpdate={this.doneUpdate} />
      </div>
    );
  }
}

export default Todo;
