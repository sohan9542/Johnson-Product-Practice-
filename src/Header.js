import React from 'react'
import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="brand"><h1>Buy.com</h1></div>
                <div className="options">
                    <a href="/profile">My Profile</a>
                    <a href="/newsfeed">Newsfeed</a>
                    <a href="/connected">Get Connected</a>
                </div>
            </nav>
        </div>
    )
}
export default Header;