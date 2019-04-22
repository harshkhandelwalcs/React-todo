import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodos';
class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }

  deleteTodo = (id) => {
    const leftTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos: leftTodos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
     const todos = [...this.state.todos,todo];
     this.setState({
       todos
     })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
