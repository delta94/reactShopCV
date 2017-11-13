import React,{Component} from 'react'
import {items} from '../data/data.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeFromCart, resetStock} from '../actions/actions_index.js'
import {bindActionCreators} from 'redux'
import _ from 'lodash'
import AlertContainer from 'react-alert'

class CheckoutList extends Component{

    alertOptions = {
        offset: 14,
        position: 'bottom right',
        theme: 'light',
        transition: 'scale'
        }
    
          
        showAlert = () => {
        this.msg.show('Item removed from cart!', {
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
                    <Link to="/" className="btn btn-danger">Continue Shopping</Link>
                    <Link to="/checkout/finish" className="btn btn-primary">Checkout</Link>
                </div>
            )
        } else{
            return(<Link to="/" className="btn btn-danger">Back</Link>)
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
            return <h3>You have no items in your cart! Pick some items</h3>          
        }

        return Object.keys(filteredCart).map(cartItemId => {
            
            const item = items[cartItemId]
            const itemQuantity = cart[cartItemId]

            return(
                <li key={item.id}>
                    <h3>{item.description}</h3>
                    <h3>{item.price}</h3>
                    <h3>{itemQuantity}</h3>
                    <button className="btn btn-warning" onClick={() => {
                        this.onRemoveFromCartClick(item.id);
                        this.showAlert();
                    }}>Remove from cart</button>                           
                </li>
            )
        })
    }


    render(){
        return(
            <div>
                <h1>Checkoutlist</h1>
                <div>
                    <ul>
                        {this.renderItemsInCartList()}
                    </ul>
                </div>
                {this.renderListNavigationButtons()}
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