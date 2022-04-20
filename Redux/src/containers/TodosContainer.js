import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../components/Todo'
import {addTodo, toggleTodo} from '../modules/todos'

function TodosContainer() {
    const todos = useSelector(state => state.todos)
    console.log(todos)
    const dispatch = useDispatch()
    const onCreate = (text) => dispatch(addTodo(text))
    const onToggle = (id) => dispatch(toggleTodo(id))

    return (  
        <Todo todos={todos} onCreate={onCreate} onToggle={onToggle} />
    );
}

export default TodosContainer;