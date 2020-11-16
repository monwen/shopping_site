import React, { Component } from 'react';
import Checker from './Checker';

class Tracker extends Component {

    constructor(props){
        super();
        this.state = {
            count: 0,
            checks: [2,3,5,9]
        }

    }

    add = num => {
        this.setState(state => ({
            count: state.count + num
        }))
    }

    multiply = num => {
        this.setState(state => ({
            count: state.count * num
        }))
    }

    reset = num => {
        this.setState({
            count: num
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={()=> this.add(1)}>Add One </button>
                <button onClick={()=> this.add(-1)}>Subtract One</button>
                <button onClick={()=> this.multiply(2)}>Double</button>
                <button onClick={()=> this.reset(0)}>Reset</button>
                <button onClick={()=> this.reset(Math.floor(Math.random() * 11))}>Random</button>
                <Checker 
                    count={this.state.count}
                    numberValue={this.state.checks[0]}
                />
                <Checker 
                    count={this.state.count}
                    numberValue={this.state.checks[1]}
                />
                <Checker 
                    count={this.state.count}
                    numberValue={this.state.checks[2]}
                />
                <Checker 
                    count={this.state.count}
                    numberValue={this.state.checks[3]}
                />
            </div>
            
        );
    }
}

export default Tracker;