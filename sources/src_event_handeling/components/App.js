import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super();
        this.state = {
            counter: 0
        }
    }

    addOne = elm => {
        elm.preventDefault();
        let val = Number.parseInt(elm.target.value);
        this.setState((state, props) => ({
            counter: state.counter + val
        }))
    }

    addNum = num => {
        this.setState(state => ({
            counter: state.counter + num
        }))
    }

    reset = () => {
        this.setState({
            counter: 0
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.counter}</div>
                <button onClick={this.addOne} value={1}>Add One</button>
                <button onClick={(e) => this.addOne(e)} value={-1}>Subtract One</button>
                <button onClick={() => this.addNum(2)}>Add Two</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default App;