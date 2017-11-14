import React, { Component } from 'react';
import { connect } from 'react-redux';
import {items} from '../data/data.js'
import _ from 'lodash'
import {Link} from 'react-router-dom';

//this container will have to connect to state to render the selected items

class Checkout extends Component{

  render() {
    const quantitiesInCart = Object.values(this.props.cart);
    const cartSize = quantitiesInCart.reduce((accumulator,currentValue)=>{
      return accumulator+currentValue;
    })

    return (
        <Link to="/checkout" className="pull-right cart">
          <i className="fa fa-2x fa-shopping-cart cartIcon" aria-hidden="true"></i>
          <span className="cartBadge">{cartSize}</span>
        </Link>
    );
  }
}

function mapStateToProps(state){
  return {cart:state.cart};
}


export default connect(mapStateToProps,null)(Checkout);
