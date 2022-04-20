const SET_STEP = 'counter/SET_STEP'
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const setStep = (step) => ({type:SET_STEP, step})
export const increase = () => ({type:INCREASE})
export const decrease = () => ({type:DECREASE})

const initialState = {
    number : 0,
    step : 1 
}

export default function counter(state=initialState, action){
    switch(action.type){
        case SET_STEP:
            return {...state, step:action.step}
        case INCREASE:
            return {...state, number:state.number + state.step}
        case DECREASE:
            return {...state, number:state.number - state.step}
        default:
            return state
    }
}