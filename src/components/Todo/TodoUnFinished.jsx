import React, { Component } from "react";

export class TodoUnFinished extends Component {
  render() {
    const { title, id, doneTodo,editTodo } = this.props;
    return (
      <div className="d-flex align-items-center justify-content-between border border-info border-2 bg-warning p-3">
        <span className="text-danger fs-2">{title}</span>
        <div className="d-flex gap-3 align-items-center">
          <button onClick={()=>editTodo(id)} className="btn btn-primary ">Edit</button>
          <button onClick={() => doneTodo(id)} className="btn  btn-success">
            Done
          </button>
        </div>
      </div>
    );
  }
}

export default TodoUnFinished;
