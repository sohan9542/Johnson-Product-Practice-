import React from 'react'
import { removeFromDatabaseCart } from './utilities/databaseManager';
import { useState } from 'react';
const ReviewProduct = (props) => {
    const {key, name, price, img, seller, stock}= props.product;
    // console.log(props);
    const [remove, setRemove] = useState('Remove This item')
    const [style, setstyle] = useState({
        display:'flex',
        width: '70%',
        alignItems: 'center',
        justifyContent:'center'

})
    function RemoveProduct() {
        setRemove('Removed')
        removeFromDatabaseCart(key)
        setstyle({display: 'none'})
    }
    return (
        <div className="card-container" style={style}>
            <div className="img-box">
                <img src={img} alt="" />
            </div>
            <div className="info-box">
                <h5 className="product-name"> <a href={props.url}>{name}</a></h5>
                <p className="company-name">Company - <span className="seller">{seller}</span></p>
                <h4 className="price">{price}$</h4>
                <p>only <span className="seller">{stock}</span> left in stock - order soon</p>
                <button onClick={RemoveProduct}>{remove}</button>
            </div>
        </div>
    )
}

export default ReviewProduct
