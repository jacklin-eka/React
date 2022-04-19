import React from 'react';
import {FaTrash} from 'react-icons/fa'
import StarRating from '../starRating/StarRate'

function Color({id, title, color, rating, onRate=f=>f, removeColor=f=>f}) {
    return (  
        <div style={{padding:'5px'}}>
            <button onClick={()=>removeColor(id)}><FaTrash /></button>
            <h4>{title}</h4>
            <div style={{backgroundColor: color, height:'50px'}}></div>
            <StarRating selected={rating} onSelect={()=>onRate(id)}/>
        </div>
    );
}

export default Color;