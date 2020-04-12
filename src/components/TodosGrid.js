import React from 'react'

export default function TodosGrid({ todos, deleteTodo }) {
 
    const renderGrid = todos.map(todo => {
        return (
            <div className="todo" key={todo.id} onClick={() => deleteTodo(todo.id)}>
                <h2>{todo.title}</h2>
                <p>{todo.content}</p>
            </div>
        )
    })
    
    return (
        <div className="todo-grid">
            {renderGrid}
        </div>
    )
}