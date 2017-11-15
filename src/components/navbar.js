import React from 'react';
import Checkout from './checkout.js'

export default ()=>{
    return (
        <nav className="navbar">
            <img className="pull-left open" src="/src/img/open.png"/>
                <a className="navbar-brand">DevShop<small>fuck fuck fuck</small></a>
                {/* <span className="slogan">A developer is good...a Tiago Rodrigues is better!</span> */}
            <span className="navbar-text">
                <Checkout/>
            </span>
        </nav>
    )
};
