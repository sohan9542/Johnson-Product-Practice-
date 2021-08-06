import React, { useEffect, useState } from 'react'
import fakeData from './fakeData';
import ReviewProduct from './ReviewProduct';
import { getDatabaseCart } from './utilities/databaseManager';

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
        // console.log(cartProducts);
        setCart(cartProducts)
    }, [])
    // console.log(cart);
    const totalPrice = cart.reduce((total, prd) => total + (prd.price * prd.quantity), 0);
    const quantitys = cart.reduce((total, q) => total + q.quantity, 0)

    return (
        <div className="shop-container">
            <div className="product-container">
                {cart.map(pd => <ReviewProduct key={pd.key} product={pd}></ReviewProduct>)}
            </div>
            <div className="cart-container">
                <p>Total Item : {quantitys}</p>
                <h3>Total Price : {totalPrice}$</h3>
            </div>
        </div>
    )
}

export default Review
