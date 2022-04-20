import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter'
import {increase, decrease, setStep} from '../modules/counter'

function CounterContainer() {
    const {number, step} = useSelector(state => ({
        number : state.counter.number,
        step : state.counter.step
    }))

    const dispatch = useDispatch()
    const onIncrease = () => dispatch(increase())
    const onDecrease = () => dispatch(decrease())
    const onSetStep = step => dispatch(setStep(step))

    return (  
        <Counter 
            number = {number}
            step = {step}
            onIncrease = {onIncrease}
            onDecrease = {onDecrease}
            onSetStep = {onSetStep}
        />
    );
}

export default CounterContainer;