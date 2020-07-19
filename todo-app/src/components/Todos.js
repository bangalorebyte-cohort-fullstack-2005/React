import React ,{ Component } from 'react';
import Todoitems from './Todoitems'

class Todos extends Component {
  
  markComplete = () => {
    console.log("hello")
  }
  
  render() {
  return  this.props.todos.map((todo) => (
    <Todoitems todo = {todo} markComplete = { this.props.markComplete} delTodo = {this.props.delTodo}  />
  ));
 }

}

export default Todos;