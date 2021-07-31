import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import './Header.css';
import Review from './Review';
import Shop from './Shop';

export const Header = () => {
    return (
        <Router>
            <div className="header">
                <nav>
                    <div className="brand"><h1>Buy.com</h1></div>
                    <div className="options">
                        <Link to="/">My Profile</Link>
                        <Link to="/review">Review product</Link>
                    </div>
                </nav>
            </div>

            <Switch>
          <Route path="/review">
              <Review />
          </Route>
          <Route path="/">
            <Shop />
          </Route>
        </Switch>
        </Router>

    )

}

export default Header;