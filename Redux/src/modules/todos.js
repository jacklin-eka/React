const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

let nextId = 1

export const addTodo = (text) => ({type:ADD_TODO, todo:{id:nextId++, text}})
export const toggleTodo = (id) => ({type:TOGGLE_TODO, id})

// const initialState = [{
//     id:nextId++,
//     text:"test",
//     completed:false
// }]

export default function todos(state=[], action) {
    switch(action.type){
        case ADD_TODO:
            return state.concat(action.todo)
        case TOGGLE_TODO:
            return state.map(item => item.id===action.id?{...item, completed:!item.completed}:item)
        default:
            return state
    }
}