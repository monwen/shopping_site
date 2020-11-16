import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Nav = (props) => {

    return (
        <nav class="navbar navbar-dark bg-dark">
            <Router>
                {/* <Link to="/"><button onClick={props.select} id="home">Home</button></Link> */}
                <Link to="/" onClick={props.select} id="home">Home</Link>
                {/* <Link to="/menu" ><button onClick={props.select} id="menu">Menu</button></Link> */}
                <Link to="/menu" onClick={props.select} id="menu">Menu</Link>
                
                <Link to="/cart" onClick={props.select} id="cart">Cart</Link>

                <Switch>
                    <Route path="/menu"></Route>
                    <Route path="menu"></Route>
                    <Route path="cart"></Route>
                    <Route exact path="/"></Route>
                </Switch>
            </Router>
        </nav>
    );
};

export default Nav;