import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './components/Todo.css'

const todoList = [
   {
     name:'',
     id:1,
     done:false
   } 
  ];
  class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      todoList: todoList
    }
  }

  toggleItem = (id)=> {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return( {
          ...todo,
          done: !todo.done
        });
      } else {
        return todo
      }
    });

    this.setState({
      todolist:newTodoList
    });
  }
    addTodo = (todoName)=> {
      this.setState({
        todoList: [...this.state.todoList, {
          name: todoName,
          id: this.state.todoList.length,
          done: false,
        }]
      });
    }

    clearDone = e => {
      this.setState({
        todoList: this.state.todoList.filter(todo => (!todo.done))
      });
    }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
       <TodoForm addTodo={this.addTodo}/>
       <TodoList clearDone={this.clearDone} toggleItem={this.toggleItem} todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
