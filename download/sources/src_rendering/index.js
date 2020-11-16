import React from 'react';
import ReactDOM from 'react-dom';

const jsxElement = <p className="title" id="jsx">Hello from JSX</p>
const createElement =
        React.createElement("p", 
                            {className: "title",
                                id: "create"},
                            "Hello from React.createElement");

const str = "World";

const car = {
    color: "red",
    miles: "25000"
}

const powerOfTwo = num => {
    return Math.pow(num,2);
}

const element = (
    <div>
        <h1>Hello {str}</h1>
        <p>5 + 3 = {5 + 3}</p>
        <p>The car is {car.color} and has {car.miles} miles</p>
        <p>5<sup>2</sup> {powerOfTwo(5)}</p>
        {jsxElement}
        {createElement}
    </div>
)

const getElement = user => {
    if (user.username) {
        return <p>Welcome {user.username}</p>
    } else {
        return <p>Welcome Guest</p> 
    }
}

const url = "https://picsum.photos/200";

const getImgs = u => {
    return <img src={u} alt="placeholder image" />
}

const element2 = (
    <div>
        {getElement({username: "Foo Bar"})}
        {getElement({password: 1234})}
        {getImgs(url)}
        {getImgs(url)}
        {getImgs(url)}
        <img src={url} alt="placeholder image" />
    </div>
);

ReactDOM.render(
    <div>
        {element}
        <p>More Stuff</p>
        {element2}
    </div>
    ,
    document.getElementById('root')
);