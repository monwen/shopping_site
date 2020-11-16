import React, { useState } from 'react';
import Greeting from './Greeting';
import GuestGreeting from './GuestGreeting';
import Instruction from './Instruction';
import UserGreeting from './UserGreeting';

const App = () => {
    const [user, setUser] = useState(false);

    const getGreeting = () => {
        if (user){
            return <UserGreeting user={user}/>
        } else {
            return <GuestGreeting />
        }
    }

    return (
        <div>
            
            <Greeting user={user}/>
            {getGreeting()}
            { !user ? 
                <button onClick={() => setUser("Foo Bar")}>Login</button>
                :
                <button onClick={() => setUser(false)}>Logout</button>
            }
            {user && <Instruction />}
        </div>
    );
};

export default App;