import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from './fakeData'

const ProdcutDetail = () => {
    const {Key} = useParams()
    const product = fakeData.find(pd=> pd.key === Key);
    const {img, name, price, priceFraction, seller, shipping, stock, url, wholePrice} = product;
    const Style = {
        width: '50%',
        margin: '0 auto',
        padding: '20px'
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Product Detail</h1>
            
            <div className="card" style={Style}>
                <img src={img} style={Style} alt={name} />
                <h4 className="title"><a href={url}> <strong>{name}</strong></a></h4>
                <h2>Price : <strong>{price}</strong></h2>
                <p>PriceFraction : <strong>{priceFraction}</strong></p>
                <p>Seller : <strong>{seller}</strong></p>
                <p>Shipping Cost : <strong>{shipping}</strong></p>
                <p><strong>{stock}</strong> item Available in Stock</p>
                <h3>Total Price: <strong>{wholePrice}</strong></h3>
            </div>
        </div>
    )
}

export default ProdcutDetail
