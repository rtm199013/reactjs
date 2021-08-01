import React from "react";

class PendingRow extends React.Component {
  moveToDone = (task) => {
    //alert(task);
    this.props.pendingToDone(task);
  };

  render() {
    const allPending = this.props.data;
    //console.log(allPending);

    return (
      <div>
        <br />
        <hr />
        <div className="row doneRow">
          <h4>Pending</h4>
          <table className="table border">
            <thead>
              <tr className="text-center">
                <th scope="col">Item</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allPending.map((p) => {
                return (
                  <tr className="text-center" key={p.name}>
                    <td>{p.name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.moveToDone(p.name)}
                      >
                        +
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => this.props.deletePending(p.name)}
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

export default PendingRow;
