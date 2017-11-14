import React from 'react';
import Checkout from './checkout.js'

export default ()=>{
    return (
        <nav className="navbar">
            <img className="pull-left open" src="/src/img/open.png"/>
            <a className="navbar-brand">ShopADev</a>
            <span className="navbar-text">
                <Checkout/>
            </span>
        </nav>
    )
};
