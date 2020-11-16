import React, { Component } from 'react';

class Timer extends Component {

    constructor(props) {
        super();
        this.state = {
            counter: 0
        }
    }

    increaseCounter = () => {
        this.setState((state, props) => ({
            counter: state.counter + props.interval
        }));
    }

    componentDidMount() {
        this.timerId = setInterval(()=> {
            this.increaseCounter();
        },1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        return <p>Counter: {this.state.counter}</p>
    }
}

export default Timer;