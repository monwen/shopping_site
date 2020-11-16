import React, { useState } from 'react';

const ListItem = props => {
    const [styleState, setStyleState] = useState({});

    const handleClick = () => {
        if(styleState.textDecoration){
            setStyleState({});
        } else {
            setStyleState({textDecoration: 'line-through'})
        }
    }

    return (
        <li style={styleState} >
            {props.name}
            <input type="checkbox" onClick={handleClick} />
            <button onClick={() => props.removeItem(props.itemId)}>Remove Item</button>
        </li>
    );
};

export default ListItem;