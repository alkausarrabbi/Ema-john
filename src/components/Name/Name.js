import React from 'react';
import "./Name.css"

const Name = (props) => {
    console.log(props);
    const {name,price}=props.product;
    return (
        <div className="style">
            <h5>{name}</h5>
            <h5> Price : {price}</h5>
        </div>
    );
};

export default Name;