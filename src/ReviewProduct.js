import React from 'react'

const ReviewProduct = (props) => {
    const { key, name, price, img, seller, stock, quantity } = props.product;
    return (
        <div className="main-container" style={{ display: 'flex'}}>
            <div className="card-container">
                <div className="img-box">
                    <img src={img} alt="" />
                </div>
                <div className="info-box">
                    <h5 className="product-name"> <a href={props.url}>{name}</a></h5>
                    <p className="company-name">Company - <span className="seller">{seller}</span></p>
                    <h4 className="price">{price}$</h4>
                    <h6>Quantity : {quantity}</h6>
                    <p>only <span className="seller">{stock}</span> left in stock - order soon</p>
                    <button className="add-to-cart" onClick={()=> props.RemoveProduct(key)}>Remove</button>
                </div>

                <h6 style={{paddingLeft: '30px'}}>Price: <strong>{(price * quantity).toFixed(2)}$</strong></h6>
            </div>

        </div>
    )
}

export default ReviewProduct
