import React,{Component} from 'react'
import {items} from '../data/data.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeFromCart, resetStock} from '../actions/actions_index.js'
import {bindActionCreators} from 'redux'
import _ from 'lodash'
import AlertContainer from 'react-alert'
import Navbar from '../components/navbar.js'

class CheckoutList extends Component{

    alertOptions = {
        offset: 14,
        position: 'bottom left',
        theme: 'dark',
        transition: 'scale'
        }
    
          
        showAlert = () => {
        this.msg.show('Item removed from cart', {
            time: 0,
            type: 'success',
            icon: <img />
        })
        }
    

    onRemoveFromCartClick(id){
        this.props.removeFromCart(id);
        this.props.resetStock(id)
    }

    renderListNavigationButtons(){
        const cartSize = Object.values(this.props.cart).reduce((acc,curr) => acc+curr)

        if(cartSize >0){
            return(
                <div>
                    <Link to="/checkout/finish" className="btn btn-primary pull-right checkoutBtn">Checkout</Link>
                    <Link to="/" className="btn pull-right backButton">Continue Shopping</Link>
                </div>
            )
        } else{
            return(<Link to="/" className="btn pull-right backButton">Back</Link>)
        }
        
    }

    renderItemsInCartList(){
        const cartSize = Object.values(this.props.cart).reduce((acc,curr) => acc+curr)
        const cart = this.props.cart;
        let filteredCart = {};

        for (const prop in cart){
            if(cart[prop]>0){
                filteredCart = {...filteredCart , [prop]:cart[prop]}
            }
        }        

        if(cartSize === 0){
            return (
            <div className="container emptyCart">
                <h1><i className="fa fa-shopping-cart" aria-hidden="true"></i>Your shopping cart is <strong>empty</strong>.</h1>
                <Link to="/" className="btn backButton backButtonEmptyCart">Back</Link>
            </div>
            )
        }

        const tableRows = Object.keys(filteredCart).map(cartItemId => {
            const item = items[cartItemId]
            const itemQuantity = filteredCart[cartItemId]
            const itemTotal = itemQuantity * item.price
            return (
                <tbody>
                    <tr>
                        <td>
                            <img className="itemThumbnail" src={item.image}></img>
                              <Link className="checkoutItemLink" to={`/item/${item.id}`}>
                                <span className="checkoutItemTitle">{item.title}</span>
                              </Link>
                        </td>
                        <td>{item.price}€</td>
                        <td>{itemQuantity}</td>
                        <td>{itemTotal}€</td>
                        <td>
                        <button className="btn btn-warning btn-circle" onClick={() => {
                            this.onRemoveFromCartClick(item.id);
                            this.showAlert();
                         }}><i className="fa fa-times" aria-hidden="true"></i></button>                           
                        </td>         
                    </tr>
                </tbody>
            )
        });

        return (
                <div className="container order">
                    <h2 className="orderTitle">Your order:</h2>
                <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>                            
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>                           
                            </tr> 
                        </thead>
                        {tableRows}
                    </table>
                        {this.renderListNavigationButtons()} 
                </div>
        )
    }


    render(){
        return(
            <div>
                <Navbar/>
                {this.renderItemsInCartList()}
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </div>
        ) 
    }
}

function mapStateToProps(state){
    return {cart:state.cart}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removeFromCart:removeFromCart,resetStock:resetStock},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckoutList);