import React from 'react';

const ListComponent = props => {

    return (
        <ul>
            {props.list.map((num,i) => {
                return (
                    <li 
                        className="listitem"
                        id={i.toString()}
                        key={i.toString()}
                    >
                        {num}<sup>2</sup> = {Math.pow(num,2)}
                    </li> 
            )})}
        </ul>
    );

};

export default ListComponent;