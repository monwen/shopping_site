import React from 'react';

const Display = props => {

    return (
        <div>
           <h1 style={{color: props.color, fontSize: 24}}>The {props.type} is {props.data} </h1>
        </div>
    );
};

export default Display;