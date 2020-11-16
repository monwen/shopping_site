import React, {useState} from 'react';

import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';

const Landing = (props) => {
    const [items, setItem] = useState(new Map());
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState(false);

    const displaying = (props)=>{
        console.log(`props value:${props.disp}`)
        switch(props.disp){
            case "home":
                console.log('chose home to display')
                return <Home />;
            case "menu":
                console.log('chose menu to display')
               
                return <Menu setItem={setItem} items={items} total={total} setTotal={setTotal} cart={cart} setCart={setCart}/>;
                
                
            case "cart":
                console.log('chose cart to display')
                return <Cart items={items} total={total}/>;
            default:
                return <Home />;
        }
    
    }
    return displaying(props);
};

export default Landing;