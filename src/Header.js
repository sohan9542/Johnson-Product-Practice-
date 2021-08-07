import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

} from "react-router-dom";
import NotFound from './NotFound';
import './Header.css';
import Review from './Review';
import Shop from './Shop';
import ProdcutDetail from './ProdcutDetail';
import SearchProduct from './SearchProduct';
import { useState} from 'react';
export const Header = () => {
    const [Search, setSearch] = useState("")
    function searchItem() {
        const searchName = document.getElementById('search').value;
        setSearch(searchName)
    }
    return (
        <Router>
            <div className="header">
                <nav>
                    <div className="brand"><h1>Buy.com</h1></div>
                    <div className="options">
                        <Link to="/">All Product</Link>
                        <Link to="/review">Review product</Link>
                    </div>
                </nav>
                <form>
                    <input type="text" id="search" required /> <Link to={"/Item"}><button onClick={searchItem}>Search</button></Link>
                </form>
            </div>

            <Switch>
                <Route path="/Item">
                    <SearchProduct name={Search} />
                </Route>
                <Route path="/product/:Key">
                    <ProdcutDetail />
                </Route>
                <Route path="/review">
                    <Review />
                </Route>
                <Route path="/">
                    <Shop />
                </Route>

                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Router>

    )

}

export default Header;