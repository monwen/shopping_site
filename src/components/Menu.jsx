import React,{useState} from 'react';
import data from '../products/productList.json';

const Menu = (props) => {

    const addItem = (event)=>{
        console.log(`parent: ${event.target.parentNode.parentNode.id}`)
        const p = event.target.parentNode.parentNode;
        const c = p.childNodes;
        console.log(`c size: ${c.length}`)
        const item ={
            id: p.id,
            name:c[1].textContent,
            description:c[2].textContent,
            price:c[3].textContent,
            image:c[0].childNodes[0].src,
            qty:1
        }

        if(props.items.has(item.id)){
            const newItem = props.items.get(item.id);
            newItem.qty += 1;
            props.setItem(props.items.set(item.id, newItem))
            
        }else{
            props.setItem(props.items.set(item.id, item))
            
        }
        props.setTotal(props.total+parseFloat(item.price))
        console.log(props.items) 
     }

    const removeItem = (event)=>{
        const p = event.target.parentNode.parentNode;
        const c = p.childNodes;
        if(props.items.has(p.id)){
            const updateItem = props.items.get(p.id);
            if(updateItem.qty >1){
                updateItem.qty -= 1;
                props.setItem(props.items.set(p.id, updateItem));
                
            }else{
                props.items.delete(p.id);
                props.setItem(props.items);
                
            }
            props.setTotal(props.total-parseFloat(c[3].textContent))
        }
        console.log(props.items)
    }

    // const [check, setCheck] =setCheck(false)
    // const changeToCheck = ()=>{
    //     if(check){
    //         setCheck(true)
    //     }else{
    //         setCheck(false)
    //     }
    // }


    
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Add to Cart</th>
                        <th>Remove</th>
                        <th>Checkout</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>{
                            console.log(`img url: ${item.image}`)
                            return(
                                <tr key={item.id} id={item.id}>
                                    <td id="image"><img src={item.image} alt="" height={50} width={50} /></td>
                                    <td id="name">{item.name}</td>
                                    <td id="description">{item.description}</td>
                                    <td id="price">{item.price}</td>
                                    <td><button onClick={addItem}>Add</button></td>
                                    <td><button onClick={removeItem}>Remove</button></td>
                                    <td><button >Checkout</button></td>
                                </tr>
                            )
                                
                        })
                    }
                </tbody>
            </table>

        </div>
       
    );
};

export default Menu;