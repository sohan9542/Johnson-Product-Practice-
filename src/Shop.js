import React from 'react'
import fakeData from './fakeData/index'
import { useState } from 'react';
import './Shop.css';
import Myproduct from './Product';
function Shop() {
    const first10 = fakeData.slice(0, 10);
    // console.log(first10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] = useState([])
    const handleAddproduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    let tax = 0;
    if (totalPrice > 1){
        tax = 12;
    }
    const [dis, setDis] = useState({});

    const d = {display: 'none'};

    function display() {
            setDis(d)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        product.map(product => <Myproduct key={product.key} handle={handleAddproduct} product={product} url={product.url} name={product.name} pic ={product.img} price={product.price} priceFrection={product.priceFraction} seller={product.seller} star={product.star} stock={product.stock}></Myproduct>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h4>Item ordered: {cart.length}</h4>
                <h4>Item Price: {Math.round(totalPrice)}$</h4>
                <h4>Tax & Vat: {tax}$</h4>
                <h4>Total: {Math.round((totalPrice+tax))}$</h4>
                {/* <button onClick={display} style={dis}>Display none</button> */}
            </div>
        </div>
    )
}

export default Shop
