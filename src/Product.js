import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
const Myproduct = (props) => {
    const {key, name, stock, seller, price, img} = props.product;
    return (
        
        <div className="card-container">
            <div className="img-box">
                <img src={img} alt="" />
            </div>
            <div className="info-box">
                <h5 className="product-name"><Link to={"/product/" + key}>{name}</Link></h5>
                <p className="company-name">Company - <span className="seller">{seller}</span></p>
                <h4 className="price">{price}$</h4>
                <p>only <span className="seller">{stock}</span> left in stock - order soon</p>
                <button onClick={()=>{
                    props.handle(props.product);
                }} className="add-to-cart">add to cart</button>
            </div>
        </div>
    );
};

export default Myproduct;