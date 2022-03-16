import React from 'react';
import CartCard from './CartCard';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({cart, price}) => {
    return ( 
        <>
            <Link to="/"><button className="back-btn" style={{padding:"0.75rem", margin:"1rem", backgroundColor:"brown", border: "none", color: "whitesmoke", borderRadius: "0.2rem"}} >Back</button></Link>
            <h1 style={{color: "#917164", fontSize: "10rem", textAlign: "center"}}>My Cart</h1>
            <div className="cart-list" >
                {
                    cart.map(item => <CartCard item={item} key={item.product.id}/>)
                }
                {price>0?<div className="total-price">Total Cart Value: ${price.toFixed(2)}</div> : <div className="empty-cart">Cart Empty!<br />Add items to cart first.</div>}
            </div>
        </>
     );
}
 
export default Cart;