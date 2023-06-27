import React, { Component, createRef } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

export class TodoInput extends Component {
    newRef=createRef();
  render() {
    const {todo}=this.props
    const submit = (e) =>{
e.preventDefault();
this.props.addTodo(this.newRef.current.value)
this.newRef.current.value="";
    }
    this.newRef.current&&(this.newRef.current.value=todo)
    return (
      <Form onSubmit={submit}>
           <InputGroup className="mb-3 mt-4 w-50   m-auto">
        <Form.Control className='fs-3 bg-info p-3 '
        ref={this.newRef}
          placeholder="Enter your notes ...!"
          aria-label="Enter your notes ...!"
         
        />
        <Button className='fs-3 bg-success text-danger'  type='submit' variant="outline-secondary" >
         {todo? 'Save':"Add"}
        </Button>
      </InputGroup>
      </Form>
    )
  }
}

export default TodoInput