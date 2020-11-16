import React from 'react';

const Cart = (props) => {
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>pic</th>
                        <th>name</th>
                        <th>description</th>
                        <th>price</th>
                        <th>qty</th>
                    </tr>
                    
                </thead>
                <tbody>
                {[...props.items.values()].map((item)=>{
                    console.log(`called from cart:${item.id}`);
                    return(
                        <tr id={item.id} key={item.id}>
                            <td id="image"><img src={item.image} alt="" height={50} width={50} /></td>
                            <td id="name">{item.name}</td>
                            <td id="description">{item.description}</td>
                            <td id="price">{item.price}</td>
                            <td id="qty">{item.qty}</td>
                        </tr>
                    )
                })}
                <tr>
                    <td>Total:</td>
                    <td></td>
                    <td></td>
                    <td>{props.total}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;