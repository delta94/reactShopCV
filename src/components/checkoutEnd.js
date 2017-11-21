import React, { Component } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class CheckoutEnd extends Component {
  render() {
        const transitionOptions = {
                transitionName:"checkoutEnd",
                transitionAppear:true,
                transitionEnter:false,
                transitionLeave:false,
                transitionAppearTimeout:3000,
                transitionLeaveTimeout:2500,
                transitionEnterTimeout:2500,
            };

    return (
    <div className="coverPage">
            <div className="jumbotron-fluid">
          <h1 className="display-3">Hello, world!</h1>
          <ReactCSSTransitionGroup {...transitionOptions}>
                <img className="tr" src="/src/img/tr.jpeg" />
          </ReactCSSTransitionGroup>
          <p className="lead">It was a pleasure having you as a costumer! Learn more about me below!</p>
          <hr className="my-4" />
                  <p className="lead">
            <a href="https://github.com/tmcrs123"><i className="fa fa-github fa-3x coverPageLink" /></a>
            <a href="https://www.linkedin.com/in/tmcrs/"><i className="fa fa-linkedin-square fa-3x coverPageLink" /></a>
            <a href="mailto:tmcrs123@gmail.com"><i className="fa fa-envelope fa-3x coverPageLink" /></a>
          </p>
        </div>
      </div>

    );
  }
}

export default CheckoutEnd;
