import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="top">
            <div className="logo">
                <h1>CryptoChecker</h1>
            </div>
            <div className="navigation">
                <ul>
                    <li><Link to="/crypto-demo">Home</Link></li>
                    <li><Link to="/stocks">Stocks</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;