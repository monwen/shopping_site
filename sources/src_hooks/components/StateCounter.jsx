import React, { useEffect, useState } from 'react';
import useGenerateRandom from '../hooks/useGenerateRandom';

const StateCounter = () => {
    const [count, setCount] = useState(0);
    const [state, setState] = useState({
        name: "State",
        use: "Stores Persistent Variables"
    })

    const getRandNumber = useGenerateRandom();

    useEffect(()=> {
        console.log(`count was updated to ${count}`);
        return () => {
            console.log("Componet was unmounted")
        }
    },[count])

    useEffect(() => {
        console.log("Component Mounted");
    },[])

    const incrementCount = () => {

        setCount(count + 1);
        
        // setCount(c => {
        //     return c + 1;
        // });

    }

    const updateState = () => {
        setState({
            ...state,
            name: "useState"
        })
    }

    const addRandom = () => {
        
        const num = getRandNumber(10, false);
        setCount(count + num);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={()=> setCount(count - 1)}>Decrement</button>
            <button onClick={addRandom}>Add Random to counter</button>
            <h1>Name is {state.name}, its use is {state.use}</h1>
            <button onClick={updateState}>Update to setState</button>

        </div>
    );
}
export default StateCounter;