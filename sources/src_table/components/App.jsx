import React from 'react';
import Table from './Table';

const App = () => {
    const headers = ["Product", "Quantity", "Price"];
    const products = [
        {
            id: "0",
            product: "Table",
            qty: 32,
            price: 100
        },
        {
            id: "1",
            product: "Chair",
            qty: 76,
            price: 27
        },
        {
            id: "2",
            product: "Lamp",
            qty: 54,
            price: 19
        }
    ]
    return (
        <div>
            <Table headers={headers} products={products} />
        </div>
    );
};

export default App;