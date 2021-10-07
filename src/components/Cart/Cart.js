import React from 'react';
import Name from '../Name/Name';

const Cart = (props) => {
    const { cart } = props;
    let total=0;
    let totalQuantity=0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    return (
        <div>
            <h2>Order Items : {totalQuantity}</h2>
            <h4>Total : {total}</h4>
            <h3>Selected Products Name : 
                {
                    cart.map(product=><Name 
                        product={product}
                        key={product.name}
                        ></Name>)
                }
                 </h3>
        </div>
    );
};

export default Cart;