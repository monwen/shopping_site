import React from 'react';
import ListComponent from './ListComponent';
import ListProducts from './ListProducts';

const App = () => {
    const myList = [1,2,4,5,7,4,3,2,1,3,4,6];
    const products = [
        {
            id: 1,
            item: "chair",
            qty: 53
        },
        {
            id: 2,
            item: "table",
            qty: 14
        },
    ]
    return (
        <div>
            <ListProducts products={products} />
            <ListComponent list={myList} />
        </div>
    );
};

export default App;