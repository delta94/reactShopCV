import React, { Component } from 'react';
import { connect } from 'react-redux';


//this container will have to connect to state to render the selected items

class Checkout extends Component{
  render() {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
