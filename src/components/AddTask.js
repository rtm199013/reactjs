import React from "react";

class AddTask extends React.Component {
  // addNewTask = (task) => {
  //   //this.props.addTask(task);
  //   alert(task);
  // };

  render() {
    //console.log(this.state.tasks);

    return (
      <div className="row newTaskRow">
        {/* <h4>NEW TASK</h4> */}
        <table className="table border">
          <thead>
            <tr className="text-center">
              <th scope="col">Task</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Details:
                  </span>
                  <input
                    type="text"
                    value={this.props.data}
                    onChange={(e) => this.props.inputHandler(e.target.value)}
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    this.props.addNewTask(this.props.data);
                  }}
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AddTask;
