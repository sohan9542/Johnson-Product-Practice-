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
            return product;
            
        })
        // console.log(cartProducts);
        setCart(cartProducts)
    }, [])
    // console.log(cart);
    return (
        <div>
            {cart.map(pd => <ReviewProduct key={pd.key} product={pd}></ReviewProduct>)}
        </div>
    )
}

export default Review
