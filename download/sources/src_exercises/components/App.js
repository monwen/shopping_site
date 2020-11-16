import React, { Component } from 'react';
import Tracker from './Tracker';
import Display from './Display';

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            date: new Date()
        }
    }

    setDate = () => {
        this.setState({
            date: new Date()
        })
    }

    checkSeconds = () => {
        if (this.state.date.getSeconds() % 2 === 0){
            return "red";
        } else {
            return "black";
        }
    }

    componentDidMount() {
        this.timeID = setInterval(() => {
            this.setDate();
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    render() {
        return (
            <div>
                <Display 
                    type={"date"}
                    data={this.state.date.toLocaleDateString()}
                    color="black"
                />
                <Display 
                    type={"time"}
                    data={this.state.date.toLocaleTimeString()}
                    color={this.checkSeconds()}
                />
                <Tracker />
            </div>
        );
    }
}

export default App;