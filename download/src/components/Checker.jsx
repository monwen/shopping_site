import React from 'react';

const Checker = props => {
    const getSign = () => {
        if (props.numberValue > props.count){
            return "greater than";
        } else if (props.numberValue < props.count) {
            return "less than";
        } else {
            return "equal to";
        }
    }
    
    return (
        <div>
            The number {props.numberValue} is {getSign()} {props.count}
        </div>
    );
};

export default Checker;