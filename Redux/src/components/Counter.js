// presentational componet

import React from 'react';

function Counter({number, step, onIncrease=f=>f, onDecrease=f=>f, onSetStep=f=>f}) {
    const onChange = (event) => {
        onSetStep(parseInt(event.target.value))
    }
    return (  
       <div>
            <h1>{number}</h1>
            <input type="number"  value={step} onChange={onChange} min="1" />
            <button type="button" onClick={onIncrease}>Increase</button>
            <button type="button" onClick={onDecrease}>Decrease</button>
       </div> 
    );
}

export default Counter;