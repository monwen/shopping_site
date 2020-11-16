import React from 'react';
import ListItem from './ListItem';

const ShoppingList = props => {
    return (
        <ul>
            {props.shoppingList.map(item => {
                return <ListItem 
                            key={item.id} 
                            itemId={item.id}
                            name={item.name} 
                            removeItem={props.removeItem} 
                        />
            })}
        </ul>
    );
};

export default ShoppingList;