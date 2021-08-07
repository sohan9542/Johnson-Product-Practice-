import React from 'react'
import fakeData from './fakeData/index'
import { useState, useEffect } from 'react';
import './Shop.css';
import Myproduct from './Product';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from './utilities/databaseManager';




function Shop() {
    const first10 = fakeData.slice(0, 10);
    const product = first10;
    const [cart, setCart] = useState([]);

    const handleAddproduct = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key)
            newCart = [...others, sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;

        })
        setCart(cartProducts)
    }, [])
    // console.log(cart);
    const totalPrice = cart.reduce((total, prd) => total + (prd.price * prd.quantity), 0);
    const quantitys = cart.reduce((total, q) => total + q.quantity, 0)

    let tax;
    if (totalPrice > 100) {
        tax = 10;
    }
    else{
        tax = 0
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
                <h4>Item ordered: {quantitys}</h4>
                <h4>Item Price: {(totalPrice).toFixed(2)}$</h4>
                <h4>Tax: {tax}$</h4>
                <h4>Total: {(totalPrice + tax).toFixed(2)}$</h4>
                <Link to={'/review'}><button className="add-to-cart">Review Order</button></Link>
            </div>
        </div>
    )
}

export default Shop
