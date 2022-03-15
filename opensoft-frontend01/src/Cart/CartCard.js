import React from 'react';

const CartCard = ({item}) => {
    return ( 
        <div className="cartCard">
            <div className="item-img">
                <img src={item.product.image} alt={item.product.title} />
            </div>
            <div className="item-details">
                <p className="title">{item.product.title}</p>
                <p className="qty">Quantity: {item.count}</p>
                <p className="price" style={{textAlign: "right", color: "black"}}>Price: ${item.product.price}<br />Total Price: ${(item.product.price*item.count).toFixed(2)}</p>
            </div>
        </div>
     );
}
 
export default CartCard;