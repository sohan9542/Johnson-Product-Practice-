import React, { useEffect, useState } from 'react'
import fakeData from './fakeData';
import ReviewProduct from './ReviewProduct';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from './utilities/databaseManager';
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([])
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

    const totalPrice = cart.reduce((total, prd) => total + (prd.price * prd.quantity), 0);
    
    const quantitys = cart.reduce((total, q) => total + q.quantity, 0)
    function RemoveProduct(item) {
        removeFromDatabaseCart(item)
        const newCart = cart.filter(pd => pd.key !== item)
        setCart(newCart)
    }
    let tax;
    if (totalPrice > 100) {
        tax = 10;
    }
    else{
        tax = 0
    }
    function handleOrder() {
        setCart([])
        processOrder()
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {cart.map(pd => <ReviewProduct RemoveProduct={RemoveProduct} key={pd.key} product={pd}></ReviewProduct>)}
            </div>
            <div className="cart-container">
                <p>Total Item : {quantitys}</p>
                <h3>Total Price : {(totalPrice + tax).toFixed(2)}$</h3>
                <Link to="/review"><button className="add-to-cart" onClick={handleOrder}>Place order</button></Link>
            </div>
        </div>
    )
}

export default Review
