import React, { Component } from 'react'
import TodosGrid from './components/TodosGrid'
import AddTodo from './components/AddTodo'
import Header from './components/Header'


import './App.css';

export default class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'hunt a job',
        content: 'hunt 2-3 jobs to catch up with life',
        importance: 'red'
      },
      {
        id: 2,
        title: 'do coding',
        content: 'it has to be everyday',
        importance: 'red'
      },
      {
        id: 3,
        title: 'do exercise',
        content: '30min - 1hr of daily routine',
        importance: 'orange'
      },
      {
        id: 4,
        title: 'listen to music',
        content: 'everyday there is a chance to explore a new genre',
        importance: 'yellow'
      },
    ],
    colors : [
      {
        red: `#CD6155`
      },
      {
        orange: `#DC7633`
      },
      {
        yellow: `#F4D03F`
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

  addBorder = (color) => {

    let borderColor = ''
    this.state.colors.forEach(c => {
      if(Object.keys(c)[0] === color)
      return borderColor = c[color] 
    })
    return {border: `5px solid ${borderColor}`}
  }

  render() {

    const { todos } = this.state

    return (
      <div>
        <Header />
        <div className="container">
          <AddTodo addTodo={this.addTodo}/>
          <TodosGrid todos={todos} deleteTodo={this.deleteTodo} addBorder={this.addBorder}/>
        </div>
      </div>
    )
  }
}