import React, {useState} from 'react';
import Nav from './Nav'
import Landing from './Landing';
import Header from './Header';
import Footer from './Footer';


const App = (props) => {

    const [selection, setSelection] = useState("");

    const selections = (e) =>{

        switch(e.target.id){
            case "home":
                console.log("clicked home");
                setSelection("home")
                break;
            case "menu":
                console.log("clicke menu");
                setSelection("menu")
                break;
            case "cart":
                setSelection("cart");
                break;
            default:
                console.log("undefined button");
        }
    }

    return (
        <div>
            <Header />
            <Nav select={selections}/> 
            <Landing disp={selection}/>
        </div>   
    );
};

export default App;