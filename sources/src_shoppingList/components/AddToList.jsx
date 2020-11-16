import React, { useState } from 'react';

const AddToList = props => {

    const [item, setItem] = useState("");

    const handleChange = event => {
        setItem(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.addItems(item);
        setItem("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">Enter Item: </label>
            <input type="text" id="item" name="name" onChange={handleChange} value={item} />
            <input type="submit" value="Add Item" />
        </form>
    );
};

export default AddToList;