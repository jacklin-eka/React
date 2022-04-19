import React from 'react';
import {FaStar} from 'react-icons/fa'

function Star({color, onSelect=f=>f}) {
    return ( 
        <>
            <FaStar color={color} onClick={onSelect} />
        </>
    );
}

export default Star;