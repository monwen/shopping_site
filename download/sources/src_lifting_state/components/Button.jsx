import React from 'react';

const Counter = props => {
    let pad = <span>{props.val}</span>
    if (props.val !== -1){
        pad = <span>&nbsp;{props.val}</span>
    }
    return (
        <div>
            <button 
                onClick={() => props.handleClick(props.val)}
            >
                Add {pad}
            </button>
            <span> set counter to {props.val + props.curr}</span> 
        </div>
    );
};

export default Counter;