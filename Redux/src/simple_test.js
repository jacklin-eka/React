import { createStore } from "redux";

// Declare Global State
export const initialState = {
    count : 0,
    text : "",
    list : []
}

// Declare Action Type - to avoid typos
export const actionType = {
    INCREASE : "INCREASE",
    DECREASE : "DECREASE",
    CHANGE_TEXT : "CHANGE_TEXT",
    ADD_TO_LIST : "ADD_TO_LIST"
}

// Create Action creator 
export const increase = ()=> {
    return {
        type: actionType.INCREASE
    }
}

export const decrease = () => {
    return {
        type : actionType.DECREASE
    }
}

export const changeText = (text) => {
    return {
        type : actionType.CHANGE_TEXT,
        text : text
    }
}

export const addToList = (item) => {
    return {
        type : actionType.ADD_TO_LIST,
        item : {id:item.id, content:item.content}
    }
}

// Declare REDUCER
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.INCREASE:
            return {...state, count : state.count + 1}
        case actionType.DECREASE:
            return {...state, count : state.count - 1}
        case actionType.CHANGE_TEXT:
            return {...state, text : action.text}
        case actionType.ADD_TO_LIST:
            return {...state, list : state.list.concat(action.item)}
        default:
            return state
    }
}

const store = createStore(reducer)

const listener = () => {
    const state = store.getState()
    console.log(state)
}

store.subscribe(listener)

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('this is action test!'))
store.dispatch(addToList({id : 1, content: 'test action'}))