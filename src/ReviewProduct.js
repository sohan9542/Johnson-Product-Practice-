import React from 'react'

const ReviewProduct = (props) => {
    const {name, price, img, seller, stock}= props.product;
    // console.log(props);
    return (
        <div className="card-container">
            <div className="img-box">
                <img src={img} alt="" />
            </div>
            <div className="info-box">
                <h5 className="product-name"> <a href={props.url}>{name}</a></h5>
                <p className="company-name">Company - <span className="seller">{seller}</span></p>
                <h4 className="price">{price}$</h4>
                <p>only <span className="seller">{stock}</span> left in stock - order soon</p>
            </div>
        </div>
    )
}

export default ReviewProduct
