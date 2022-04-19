import React from 'react';
import Star from './Star'

function StarRate({totalStars=5, selected=0, onSelect=f=>f, style={}}) {
    const createArray = (length) => [...Array(length)]

    return ( 
        <div style={{padding: '5px', ...style}}>
            {createArray(totalStars).map((star, i) => 
                <Star key={i} color={selected > i ? 'red' : 'grey'}  onSelect={onSelect} />
            )}
        </div>
    );
}

export default StarRate;