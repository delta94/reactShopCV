import React from 'react';
import Checkout from './checkout.js'

export default ()=>{
    return (
        <nav className="navbar">
            <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                <img className="pull-left open" src="/src/img/open.png"/>
                <a className="navbar-brand">Tiago_Rodrigues.com<small><i>Premium Developer Shop</i></small></a>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 cart">
                <span className="navbar-text">
                    <Checkout/>
                </span>
            </div>
            </div>
        </nav>
    )
};
