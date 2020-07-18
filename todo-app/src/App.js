import React ,{ Component } from 'react';
import Todos from './components/todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: "take out the trash",
      completed: false
      },
      {
        id: 2,
        title: "Should learn react",
        completed: false
      },
      {
          id: 3,
          title: "Practice react",
          completed: false
      }
    ]
  }
 
  render() {
  return (
    <div className="App">
      <Todos todos={this.state.todos} />
    </div>
    
  );
 }
}

export default App;
