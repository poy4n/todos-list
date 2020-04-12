import React, { Component } from 'react'
import TodosGrid from './components/TodosGrid'
import AddTodo from './components/AddTodo'

import './App.css';

export default class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'look for job',
        content: 'have to hunt 10 jobs to catch up with the program'
      },
      {
        id: 2,
        title: 'do coding',
        content: 'asdfdsfdsaaf'
      },
      {
        id: 3,
        title: 'do exercises',
        content: 'dfgdfhfgjyejtehwrhwr'
      },
      {
        id: 4,
        title: 'do exercises',
        content: 'dfgdfhfgjyejtehwrhwr'
      },
      {
        id: 5,
        title: 'look for job',
        content: 'have to hunt 10 jobs to catch up with the program'
      },
      {
        id: 6,
        title: 'do coding',
        content: 'asdfdsfdsaaf'
      },
      {
        id: 7,
        title: 'do exercises',
        content: 'dfgdfhfgjyejtehwrhwr'
      },
      {
        id: 8,
        title: 'do exercises',
        content: 'dfgdfhfgjyejtehwrhwr'
      },
    ]
  }

  addTodo = (todo) => {
    if(todo.title !== '') {
      todo.id = Math.random();
      this.setState({
        todos: [...this.state.todos, todo]
      })
    }
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  render() {

    const { todos } = this.state

    return (
      <div className="container">
        <AddTodo addTodo={this.addTodo}/>
        <TodosGrid todos={todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  }
}