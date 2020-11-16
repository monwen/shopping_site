import React from 'react';

const ListProducts = props => {
    return (
        <ul>
            {props.products.map(product => {
                return (
                    <li 
                        id={"product" + product.id}
                        key={product.id}
                    >
                        <p>Product: {product.item}</p>
                        <p>Quantity: {product.qty}</p>
                    </li>
            )})

            }
        </ul>
    );
};

export default ListProducts;