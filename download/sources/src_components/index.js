import React from 'react';
import ReactDOM from 'react-dom';

// const clock = () => {
//     const element = <p>The time is {new Date().toLocaleTimeString()}</p>
//     return element
// }

// setInterval(clock, 1000);

const Greeting = (props) => {
    return <p>Hello {props.name}</p>
}

class Message extends React.Component {
    render() {
        return <p>Hello {this.props.name}</p>
    }
}

function App () {
    return (
        <div>
            <Message name="Jonathan" />
            <Message name ="Joseph" />
            <Greeting name="Jotaro" />
            <Greeting />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);