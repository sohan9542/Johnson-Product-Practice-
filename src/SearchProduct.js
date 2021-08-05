import React from 'react'
import fakeData from './fakeData';
import Myproduct from './Product';
const SearchProduct = (props) => {
    const name = props.name;
    const pd = fakeData.filter(e => {
        const element = e.name.toLowerCase();
        const newName = name.toLowerCase()
        return element.includes(newName)
    });
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>" {name} Search Result"</h1>
            {pd.map(single => <Myproduct product={single}></Myproduct>)}
        </div>
    )
}

export default SearchProduct
