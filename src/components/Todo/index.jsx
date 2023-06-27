import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";





import TodoInput from "./TodoInput";
import TodoFinished from "./TodoFinished";
import TodoUnFinished from "./TodoUnFinished";
import { TODOS } from "../data";


export class Todo extends Component {
  state = {
    todos:JSON.parse(localStorage.getItem(TODOS))|| [
      {
        id:uuidv4(),
        title: "lkwmefjw",
        done: false,
      },
      {
        id: uuidv4(),
        title: "lkwmefjw",
        done: false,
      },
      {
        id:uuidv4(),
        title: "lkwmefjw",
        done: true,
      },
    ],
  };
  render() {
    const unDoneItems = this.state.todos.filter((todo) => !todo.done);
    const doneItems = this.state.todos.filter((todo) => todo.done);
    const addTodo = (value) => {
      let todos = [
        ...this.state.todos,
        {
          id: uuidv4(),
          title: value,
          done: false,
        }
      ];
      if(value!==""){
       
          this.setState({todos});
          toast.success("Muvaffaqiyatli qo'shildi")
          localStorage.setItem(TODOS,JSON.stringify(todos))
      }else{
        toast.error("Please fill this input !!")
     
      }
    };
    const doneTodo = (id)=>{
       
let todos=this.state.todos.map((todo)=>{
    if(todo.id===id){
        todo.done=true
    }
    return todo
})
this.setState({todos});
localStorage.setItem(TODOS,JSON.stringify(todos))
    }
    const deleteTodo=(id)=>{
let todos=this.state.todos.filter((todo)=>todo.id!==id )
this.setState({todos});
localStorage.setItem(TODOS,JSON.stringify(todos))
    }
    const editTodo=(id)=>{
        this.setState({selected:id})
    }
    let todo=this.state.todos.find((th)=>th.id===this.state.selected)
    return (
      <Container>
        <TodoInput todo={todo?todo.title:""}  addTodo={addTodo} />
        <Row>
          <Col className="w-50 " lg={6}>
            {unDoneItems.map((todo ) => (
              <TodoUnFinished doneTodo={doneTodo} editTodo={editTodo} key={todo.id} {...todo} />
            ))}
          </Col>

          <Col lg={6}>
            {doneItems.map((todo) => (
              <TodoFinished deleteTodo={deleteTodo} key={todo.id} {...todo}/>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Todo;
