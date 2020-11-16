import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todos from './Todos';
import axios from 'axios';
import Comments from './Comments';
import Users from './Users';

const App = () => {

    const [state, setState] = useState([]);

    // const getApiFetch = (resource, id) => {
    //     console.log("Calling API")
    //     fetch(`https://jsonplaceholder.typicode.com/${resource}${(id) ? `/${id}`: ''}`)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json);
    //         setTodos(json);
    //     })
    // }

    const getApiAxios = (resource, id) => {
        axios.get(`https://jsonplaceholder.typicode.com/${resource}${(id) ? `/${id}`: ''}`)
            .then(response => {
                // console.log(response);
                // console.log(response.data);
                setState(response.data);
            })
    }

    const clearState = () => {
        setState([]);
    }

    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/todos">Todos</Link>
            <Link to="/users">Users</Link>
            <Link to="/comments">Comments</Link>

            <Switch>
                <Route path="/todos">
                    <Todos todos={state} getApi={getApiAxios} clearState={clearState} />
                </Route>

                <Route path="/users">
                    <Users users={state} getApi={getApiAxios} clearState={clearState} />
                </Route>

                <Route path="/comments">
                    <Comments comments={state} getApi={getApiAxios} clearState={clearState}/>
                </Route>

                <Route exact path="/">
                    <p>Click on the Nav links!</p>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;