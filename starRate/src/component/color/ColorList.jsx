import React from 'react';
import Color from './Color'

function ColorList({colors, onRate=f=>f, onremove=f=>f}) {
    return (  
        <>
            {colors.map(color => <Color key={color.id} {...color} onRate={onRate} removeColor={onremove} />)}
        </>
    );
}

export default ColorList;