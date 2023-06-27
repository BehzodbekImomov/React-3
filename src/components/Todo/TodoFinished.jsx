import React, { Component } from 'react'

export class TodoFinished extends Component {
  render() {
    const { title, id, deleteTodo } = this.props;
    return (
      <div className='d-flex align-items-center justify-content-between border border-info border-2 bg-secondary p-3'>
        <span className='text-info fs-2'>{title}</span>
        <div className='d-flex gap-3 align-items-center'>
           
            <button onClick={() => deleteTodo(id)} className='btn btn-danger'>Delete</button>
        </div>
      </div>
    )
  }
}

export default TodoFinished