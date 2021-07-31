import React from 'react'
import ReviewProduct from './ReviewProduct';

const Review = () => {
    const name = localStorage.getItem('Cart');
    const product = JSON.parse(name)
    return (
        <div>
            {product.map(p=> <ReviewProduct product={p} key={p.price}></ReviewProduct>)}
        </div>
    )
}

export default Review
