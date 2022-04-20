// presenatation component
import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({todo, onToggle=f=>f}){
    return (
        <li 
            style={{textDecoration : todo.completed ? 'line-through' : 'none'}}
            onClick = {() => onToggle(todo.id)}
        >
            {todo.text}{todo.id}{todo.completed}
        </li>
    )
})

const TodoList = React.memo(function TodoList({todos, onToggle=f=>f}){
    return (
        <ul>
            {
                todos.map(todo => (<TodoItem key={todo.id} todo={todo} onToggle={onToggle} />))
            }
        </ul>
    )
})

function Todo({todos, onCreate=f=>f, onToggle=f=>f}) {
    const [content, setContent] = useState("")

    const onChange = (event) => {
        setContent(event.target.value)
    }

    const onSubmit = (event) => {
        console.log('submit')
        event.preventDefault()
        onCreate(content)
        setContent("")
    }

    return (  
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={content} onChange={onChange} />
                <button type="submit">Add</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </>
    );
}

export default Todo;