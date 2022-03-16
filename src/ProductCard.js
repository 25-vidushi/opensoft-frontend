import React from 'react';
import {useState} from "react";
import upIcon from './icons/up.png';
import downIcon from './icons/down.png';
import './ProductCard.css';

const ProductCard = (props) => {
    // const count = props.returnCount(props.product);
    const [count, setCount] = useState(props.returnCount(props.product)>=0 ? props.returnCount(props.product) : 0) 
    let p;

    const decClickHandler = () => {
        props.decreaseHandler(props.product);
        const x = count;
        setCount(x-1);
    }

    const incClickHandler = () => {
        props.increaseHandler(props.product);
        const x = count;
        setCount(x+1);
    }

    const addClickHandler = () => {
        props.addHandler(props.product);
        const x = count;
        setCount(x+1);
    }

    if (count>0) 
            p = <div className="counter">
                    <div><img src={downIcon} alt="Decrease quantity" className="down-btn" onClick={decClickHandler} /></div>
                    <div><span className="count">Quantity: {count}</span></div>
                    <div><img src={upIcon} alt="Increase quantity" className="up-btn" onClick={incClickHandler} /></div>
                </div>
    else p = <button className="add-btn" onClick={addClickHandler}>Add to Cart</button>

    return ( 
        <div className="prodCard" key={props.product.productID}>
            <div className="title">{props.product.title}</div>
            <div className="image"><img src={props.product.image} alt="Product" /></div>
            <div className="desc">{props.product.description}</div>
            <div className="price">Price: ${props.product.price}</div>
            {p}
            
        </div>
     );
}
 
export default ProductCard;