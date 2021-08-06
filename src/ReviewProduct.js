import React from 'react'
import { removeFromDatabaseCart } from './utilities/databaseManager';
import { useState, useEffect } from 'react';
const ReviewProduct = (props) => {
    // console.log(props);
    const { key, name, price, img, seller, stock, quantity } = props.product;
    // console.log(props);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const newCart = [...cart, props.product];
        // console.log(newCart);
    })
   
    const [remove, setRemove] = useState('Remove This item')
    const [style, setstyle] = useState({
        display: 'flex',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'

    })
    function RemoveProduct() {
        setRemove('Removed')
        removeFromDatabaseCart(key)
        setstyle({ display: 'none' })
    }
    // const totalPrice = .reduce((total, prd) => total + prd.price, 0);

    return (
        <div className="main-container" style={{ display: 'flex' }}>
            <div className="card-container" style={style}>
                <div className="img-box">
                    <img src={img} alt="" />
                </div>
                <div className="info-box">
                    <h5 className="product-name"> <a href={props.url}>{name}</a></h5>
                    <p className="company-name">Company - <span className="seller">{seller}</span></p>
                    <h4 className="price">{price}$</h4>
                    <h6>Quantity : {quantity}</h6>
                    <p>only <span className="seller">{stock}</span> left in stock - order soon</p>
                    <button onClick={RemoveProduct}>{remove}</button>
                </div>
            </div>
            <div className="calculate-price" style={{ padding: '30px' }}>
                <h6>Price: {price * quantity}</h6>
            </div>
        </div>
    )
}

export default ReviewProduct
