import React from 'react';
import './Product.css';
const Myproduct = (props) => {
    return (
        <div className="card-container">
            <div className="img-box">
                <img src={props.pic} alt="" />
            </div>
            <div className="info-box">
                <h5 className="product-name"> <a href={props.url}>{props.name}</a></h5>
                <p className="company-name">Company - <span className="seller">{props.seller}</span></p>
                <h4 className="price">{props.price}$</h4>
                <p>only <span className="seller">{props.stock}</span> left in stock - order soon</p>
                <button onClick={()=>{
                    props.handle(props.product);
                }} className="add-to-cart">add to cart</button>
            </div>
        </div>
    );
};

export default Myproduct;