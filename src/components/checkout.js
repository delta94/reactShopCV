import React, { Component } from 'react';
import { connect } from 'react-redux';
import {items} from '../data/data.js'
import _ from 'lodash'


//this container will have to connect to state to render the selected items

class Checkout extends Component{

  render() {
    const quantitiesInCart = Object.values(this.props.cart);
    const cartSize = quantitiesInCart.reduce((accumulator,currentValue)=>{
      return accumulator+currentValue;
    })

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span>{this.props.cart.length}</span>
            <ul className="navbar-nav mr-auto">
                <li>stuff</li>
                <li>stuff</li>                
          </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {cart:state.cart};
}


export default connect(mapStateToProps,null)(Checkout);
