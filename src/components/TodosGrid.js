import React from 'react'

export default function TodosGrid({ todos, deleteTodo, addBorder }) {

    const renderGrid = todos.map(todo => {
        return (
            <div style={addBorder(todo.importance)} className="todo" key={todo.id} onClick={() => deleteTodo(todo.id)}>
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