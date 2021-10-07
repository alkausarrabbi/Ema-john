import React from 'react';
import "./Product.css"
const Product = (props) => {
    const { name,price,img,stock}=props.product
    return (
        <div className="product">
            <div className="main">
            <div>
            <img src={img} alt="" />
            </div>
            <div className="text">
                <h4>{name}</h4>
                <p>Price : $ {price}</p>
                <p>Product aviable : {stock}</p>
                <button className="btn"  onClick={()=>props.handleAddToCart(props.product)}>Add To Cart</button>
            </div>
            </div>    
        </div>
       
    );
};

export default Product;