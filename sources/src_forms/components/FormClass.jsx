import React, { Component } from 'react';

class FormClass extends Component {

    constructor(props){
        super();
        this.state = {
            name:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Hello " + this.state.name);
        this.setState({
            name: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">Enter your name: </label>
                <input type="text" 
                        value={this.state.name} 
                        name="name"
                        onChange={this.handleChange}/>
                <input type="submit" />
            </form>
        );
    }
}

export default FormClass;