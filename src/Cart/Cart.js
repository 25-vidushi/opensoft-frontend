import React from 'react';
//import CartCard from './CartCard';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    const {cart,increase,reduction,removeProduct,total} = props;
    if(cart.length === 0){
        return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
    }else{
        return (
            <>
                {
                    cart.map(item =>(
                        <div className="details cart" key={item.id}>
                                <div className="box">
                                <div className="row">
                                    <h2>{item.itemName}</h2>
                                    <span>Rs{item.price * item.count}</span>
                                </div>
                                    <div className="amount">
                                    <button className="count" onClick={() => reduction(item.id)}> - </button>
                                    <span>{item.count}</span>
                                    <button className="count" onClick={() => increase(item.id)}> + </button>
                                </div>
                            </div>
                            <div className="delete" onClick={() => removeProduct(item.id)}>X</div>
                        </div>
                    ))
                }
                <div className="total">
                    <Link to="/payment">Payment</Link>
                    <h3>Total: Rs{total}</h3>
                </div>
            </>
            )
        }
    }

export default Cart;
