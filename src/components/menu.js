import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import Item from '../components/item.js'
import {addToCart} from '../actions/actions_index.js'
import {bindActionCreators} from 'redux'


//this is a smart component. Needs to have access to items to render from state

class Menu extends Component{
    addToCart(item){
        this.props.addToCart(item);
    }

    renderItemList(){
        console.log(this.props.filteredItems);
        const items = _.valuesIn(this.props.filteredItems);
        return items.map(item => {
            return (<Item item={item} key={item.id} onClick={() =>this.addToCart(item)}/>)
        })
    };


    render(){ 
    return (
        <div className="menu">
            {this.renderItemList()}
        </div>
    )
    }
}

function mapStateToProps({filteredItems,cart,selectedTags}){
    return {filteredItems,cart,selectedTags}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart:addToCart},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
