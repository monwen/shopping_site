import React, { useState } from 'react';
import Button from './Button'

const App = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = num => {
        setCounter(counter + num);
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <Button handleClick={handleClick} val={1}  curr={counter}/>
            <Button handleClick={handleClick} val={2}  curr={counter}/>
            <Button handleClick={handleClick} val={3}  curr={counter}/>
            <Button handleClick={handleClick} val={-1} curr={counter}/>
        </div>
    );
};

export default App;