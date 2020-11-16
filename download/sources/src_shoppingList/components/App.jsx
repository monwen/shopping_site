import React, { useState } from 'react';
import AddToList from './AddToList';
import ShoppingList from './ShoppingList';

const App = () => {

    const [shoppingList, setShoppingList] = useState([]);

    const addItems = item => {
        setShoppingList([...shoppingList, 
            {
                name: item, 
                id:(shoppingList.length + 1), 
                checked:false 
            }]);
    }

    const removeItem = id => {
        const filtered = shoppingList.filter(entry=> entry.id !== id);
        setShoppingList(filtered);
    }

    return (
        <div>
            <ShoppingList shoppingList={shoppingList} removeItem={removeItem} />
            <AddToList addItems={addItems}/>
        </div>
    );
};

export default App;