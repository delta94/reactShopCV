import React, { Component } from "react";
import { items } from "../data/data.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, resetStock } from "../actions/actions_index.js";
import { bindActionCreators } from "redux";
import _ from "lodash";
import AlertContainer from "react-alert";
import Navbar from "../components/navbar.js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class CheckoutList extends Component {

  alertOptions = {
    offset: 14,
    position: "bottom left",
    theme: "dark",
    time: 1000,
    transition: "scale"
  };

  showAlert = () => {
    this.msg.show("Item removed from cart", {
      time: 1000,
      type: "success",
      icon: <img />
    });
  };

  onRemoveFromCartClick(id) {
    this.props.removeFromCart(id);
    this.props.resetStock(id);
  }

  renderCartItemSummary(filteredCart){
    const cartSize = Object.values(this.props.cart).reduce(
        (acc, curr) => acc + curr
      );
    
    if(cartSize === 0) return
    
    let cartValue = 0
    
    Object.keys(filteredCart).map(cartItemId => {
        const item = items[cartItemId];
        const itemQuantity = filteredCart[cartItemId];
        const itemTotal = itemQuantity * item.price;
        cartValue+=itemTotal
    });
    
    return(
    <div className="col-md-offset-1 col-md-3">
    <div className="shopping_cart_summary">Shopping Cart Summary</div>
    <div className="cartSummaryRow">
      <p>
        Items<span className="shopping_cart_price pull-right">
          {Math.round(cartValue * 100 / 100)}€
        </span>
      </p>
    </div>
    <div className="cartSummaryRow">
      <p>
        VAT<span className="shopping_cart_price pull-right">
          {Math.round(cartValue * 0.23 * 100) / 100}€
        </span>
      </p>
    </div>
    <div className="cartSummaryRow">
      <p>
        Total<span className="shopping_cart_price pull-right">
          {Math.round(cartValue * 100 / 100) +
            Math.round(cartValue * 0.23 * 100) / 100}€
        </span>
      </p>
    </div>
    <div className="shopping_cart_summary">Extras</div>
    <div className="cartSummaryRow">
      <p className="pricelessText">
        Tiago Rodrigues<button
          className="priceless pull-right"
          data-hover="PRICELESS!"
        >
          ?
        </button>
      </p>
    </div>
    {this.renderListNavigationButtons()}
  </div>
    )
  }

  renderListNavigationButtons() {
    const cartSize = Object.values(this.props.cart).reduce(
      (acc, curr) => acc + curr
    );

    if (cartSize > 0) {
      return (
        <div>
          <div className="checkoutBtnDiv">
            <Link to="/checkout/finish" className="btn btn-primary checkoutBtn">
              Checkout
            </Link>
          </div>
          <div className="checkoutBtnDivBack">
            <Link to="/" className="checkoutBtnBack">
              Continue Shopping
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <Link to="/" className="btn pull-right backButton">
          Back
        </Link>
      );
    }
  }

  renderCartItem(filteredCart) {
    
    const tableRows = Object.keys(filteredCart).map(cartItemId => {
        const item = items[cartItemId];
        const itemQuantity = filteredCart[cartItemId];
        const itemTotal = itemQuantity * item.price;
        
    
    const cartItemAppearTransitionOptions = {
        transitionName:"cartItem",
        transitionAppear:true,
        transitionEnter:false,
        transitionLeave:true,
        transitionAppearTimeout:5000,
        transitionLeaveTimeout:5000,
        transitionEnterTimeout:0,
    };


    return(
    <ReactCSSTransitionGroup component="tr" key={cartItemId} {...cartItemAppearTransitionOptions}>
      <td>
        <img className="itemThumbnail" src={item.image} />
        <Link className="checkoutItemLink" to={`/item/${item.id}`}>
          <span className="checkoutItemTitle">{item.title}</span>
        </Link>
      </td>
      <td>{item.price}€</td>
      <td>{itemQuantity}</td>
      <td>{itemTotal}€</td>
      <td>
        <button
          className="btn"
          onClick={() => {
            this.onRemoveFromCartClick(item.id);
            this.showAlert();
          }}
        >
          &times;
        </button>
      </td>
        </ReactCSSTransitionGroup>);
    })

    return tableRows;
  }

  renderItemsInCartList(filteredCart) {
    const cartSize = Object.values(this.props.cart).reduce(
      (acc, curr) => acc + curr
    );    
    if (cartSize === 0) {
      return (
        <div className="container emptyCart">
          <h1>
            <i className="fa fa-shopping-cart" aria-hidden="true" />Your
            shopping cart is <strong>empty</strong>.
          </h1>
          <Link to="/" className="btn backButton backButtonEmptyCart">
            Back
          </Link>
        </div>
      );
    }
    
    return (
      <div className="order">
        <h2 className="orderTitle">Your order:</h2>
        <div className="col-md-8">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
            {this.renderCartItem(filteredCart)}
        </ tbody>
    </table>
        </div>
    </div>
    );
  }

  render() {
    const cart = this.props.cart;
    let filteredCart = {};

    for (const prop in cart) {
      if (cart[prop] > 0) {
        filteredCart = { ...filteredCart, [prop]: cart[prop] };
      }
    }

    return (
      <div>
        <Navbar />
        <div className="container">
            {this.renderItemsInCartList(filteredCart)}
            {this.renderCartItemSummary(filteredCart)}
        </div>
        <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { removeFromCart: removeFromCart, resetStock: resetStock },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutList);
