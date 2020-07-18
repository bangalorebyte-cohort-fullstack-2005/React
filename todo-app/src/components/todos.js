import React ,{ Component } from 'react';

class Todos extends Component {
  render() {
  return  this.props.todos.map((todo) => (
    <li>{todo.title}</li>
  ));
 }

}

export default Todos;