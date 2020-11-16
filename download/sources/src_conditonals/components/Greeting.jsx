import React from 'react';

const Greeting = props => {
    if(props.user) {
        return <p>You are logged in</p>
    } else {
        return <p>You are logged out</p>
    }
};

export default Greeting;