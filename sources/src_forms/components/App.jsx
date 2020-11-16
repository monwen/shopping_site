import React, { useState } from 'react';
import FormClass from './FormClass';

const App = () => {

    const [formData, setFormData] = useState({color: "", essay: ""});
    const [color, setColor] = useState("");

    const handleChange = event => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        setColor(formData.color);
        setFormData({color: "", essay: ""});
    }

    return (
        <div>
            <h3>Survey</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Favorite Color </label><br />
                <input 
                    id="color" 
                    name="color"
                    type="text"
                    value={formData.color}
                    placeholder="Your Color"
                    onChange={handleChange}
                /><br />
                <label htmlFor="essay">Does pineapple belong on pizza?</label><br />
                <textarea
                    value={formData.essay}
                    id="essay"
                    name="essay"
                    rows="10"
                    onChange={handleChange}
                /><br />
                <input type="submit"/>
            </form>
            <p>Your Favorite Color is: {color} </p>
            <FormClass />
        </div>
    );
};

export default App;