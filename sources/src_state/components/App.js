import React from 'react';
import Clock from './Clock.js';
import Timer from './Timer'

class App extends React.Component {

    constructor(props) {
        super();
        this.state = {
            message: "Click here for the time",
            date: new Date()
        }

        this.setTime = this.setTime.bind(this);
    }

    setTime() {
        this.setState({
            date: new Date()
        });
    }

    /* This method declaration does not require the binding in the constructor */
    // setTime = () => {
    //     this.setState({
    //         date: new Date()
    //     });
    // }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setTime();
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    
    render() {
        return (
            <div>
                <Clock time={this.state.date.toLocaleTimeString()}/>
                <Timer interval={1}/>
                <Timer interval={2}/>
                <button onClick={this.setTime}>{this.state.message}</button>
            </div>
        );
    }
}

export default App;