import React from 'react'
import fakeData from './fakeData/index'
import { useState } from 'react';
import './Shop.css';
import Myproduct from './Product';
import { addToDatabaseCart } from './utilities/databaseManager';
function Shop() {
    const first10 = fakeData.slice(0, 10);
    // console.log(first10);
    const product = first10;
    const [cart, setCart] = useState([]);
    const handleAddproduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd=> pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)
    }
    // localStorage.setItem('Cart', JSON.stringify(cart))
    // console.log(cart);
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);                                                                                            
    let tax = 0;
    if (totalPrice > 1) {
        tax = 12;
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        product.map(product => <Myproduct key={product.key} handle={handleAddproduct} product={product} ></Myproduct>)
                    }
                    
                </ul>
            </div>
            <div className="cart-container">
                <h4>Item ordered: {cart.length}</h4>
                <h4>Item Price: {Math.round(totalPrice)}$</h4>
                <h4>Tax & Vat: {tax}$</h4>
                <h4>Total: {Math.round((totalPrice + tax))}$</h4>
                {/* <button onClick={display} style={dis}>Display none</button> */}
            </div> 
        </div>
    )
}

export default Shop
