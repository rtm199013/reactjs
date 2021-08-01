import React from "react";

class allDone extends React.Component {
  moveToDone = (task) => {
    //alert(task);
    this.props.doneUpdate(task);
  };
  render() {
    const allDone = this.props.data;
    //console.log(allDone);

    return (
      <div>
        <br />
        <hr />
        <div className="row doneRow">
          <h4>Done</h4>
          <table className="table border">
            <thead>
              <tr className="text-center">
                <th scope="col">Item</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allDone.map((p) => {
                return (
                  <tr className="text-center" key={p.name}>
                    <td>{p.name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.moveToDone(p.name)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default allDone;
