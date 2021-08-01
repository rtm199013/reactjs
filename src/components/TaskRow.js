import React from "react";
import TaskItem from "./TaskItem";

class Task extends React.Component {
  // state = {
  //   tasks: [
  //     { name: "eat", status: "pending" },
  //     { name: "code", status: "pending" },
  //     { name: "sleep", status: "done" },
  //   ],
  // };

  render() {
    // let taskPending =
    // this.state.tasks.status === "pending" ?
    //console.log(this.state.tasks);
    // let allPendings = this.state.tasks.find((obj) => {
    //   return obj.status === "pending";
    // });
    // console.log(allPendings);

    // let pendings = this.state.tasks.filter((i) => i.status === "pending");
    // console.log(pendings);
    // let finished = this.state.tasks.filter((i) => i.status === "done");
    // console.log(finished);

    // let task = pendings.map((item) => (
    //   <TaskItem name={item.name} status={item.status} />
    // ));

    return (
      <div className="row pendingRow">
        <h4>PENDING TASKS</h4>
        <table className="table border">
          <thead>
            <tr className="text-center">
              <th scope="col">Task</th>
              <th scope="col">Last</th>
            </tr>
          </thead>
          {/* <tbody>{task}</tbody> */}
        </table>
      </div>
    );
  }
}

export default Task;
