import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products,setProducts]=useState([]);
    const[cart,setCart]=useState([]);
    const [display,setDisplay]=useState([]);
    useEffect(()=>{
        fetch("./products.JSON")
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplay(data)
        })
    }
    
    ,[])

    useEffect(()=>{
       if(products.length){
        const savedProducts=getStoredCart();
        const storedCart=[];
        for (const key in savedProducts){
            const addedProducts=products.find(product=>product.key === key)
           storedCart.push(addedProducts);
           if(addedProducts){
               const quantity=savedProducts[key];
               addedProducts.quantity=quantity;
               console.log(addedProducts);
            setCart(storedCart);
        }
        }
      
       }
    },[products])

    const handleAddToCart=(product)=>{
        console.log(cart);
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.key);
    }

    const handleSearchField=e=>{
        const searchText=e.target.value;
        const searchProduct=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()))
       setDisplay(searchProduct);
        
    }
    return (
       <div>
           <div className="search">
               <input onChange={handleSearchField} type="text" placeholder="Search Products" />
               {/* <button>Search</button> */}
           </div>
            <div className="shop">
            <div className="product">
                <h2>Total Products  : {products.length}</h2>
                {
                    display.map(product=><Product 
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                         ></Product> )
                }
            </div>
            <div>
                <h1>Order Summary</h1>
                <Cart cart={cart}></Cart>
            </div>
        </div>
       </div>
    );
};

export default Shop;