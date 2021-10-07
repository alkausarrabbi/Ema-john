import React from 'react';
import "./Header.css"
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div>
           <img src={logo} alt="" width="25%" className="logo"/>
           <div className="header">
               <a href="/shop">Shop</a>
               <a href="/oder">Order review</a>
               <a href="/manage">Manage Inventory</a>
           </div>
        </div>
    );
};

export default Header;