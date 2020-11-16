import React from 'react';

const Table = props => {
    return (
        <table>
            <thead>
                <tr>
                {
                    props.headers.map(header => {
                        return (<th key={header}>
                            {header}
                        </th>
                    )})
                }
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map(product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.product}</td>
                                <td>{product.qty}</td>
                                <td>{product.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default Table;