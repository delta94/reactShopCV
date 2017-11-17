import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Item from '../components/item.js'
import {setSelectedOrdering ,setFirstTimeVisit} from '../actions/actions_index.js'
import {bindActionCreators} from 'redux'
import {numberOfTags, orderingType} from '../data/data.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


//this is a smart component. Needs to have access to items to render from state

class Menu extends Component{

    orderItems(items){
        const ordering = this.props.selectedOrdering;
        switch (ordering){
            case orderingType.category:
            return items.sort((a,b) => {
                if(a.tag < b.tag){
                    return -1
                }
                if(a.tag > b.tag){
                    return 1
                }
                return 0
            })
            case orderingType.priceAsc:
            return items.sort((a,b) => {if(a.price>b.price) return 1})
            case ordering.priceDesc:
            return items.sort((a,b) => {if(a.price>b.price) return -1})
            default:
            return items
        }
    }

    renderItemList(){
        
        const itemsArr = _.valuesIn(this.props.items);
        const activeTags = _.mapValues(this.props.selectedTags,tag => tag.selected);
        const activeTagsCount = Object.values(activeTags).reduce((accumulator,current) => {
            if(current){
                return accumulator+1
            } else {
                return accumulator
            }
        },0);

        const orderedItemsArr = this.orderItems(itemsArr);

        
        return orderedItemsArr.map(item => {

            if(activeTagsCount === numberOfTags || activeTagsCount == 0 ){
                return (<Item item={item} key={item.id}/>)
            }

            if(this.props.selectedTags[item.tag].selected){
                return (<Item item={item} key={item.id}/>)
            }
              
            })
    };

    componentDidMount(){
        this.props.setFirstTimeVisit(false);
    }


    render(){
        const menuTransitionOptions = {
            transitionName:"menu",
            transitionAppear:this.props.firstTimeVisit,
            transitionEnter:false,
            transitionLeave:false,
            transitionAppearTimeout:2000,
            transitionLeaveTimeout:2500,
            transitionEnterTimeout:2500,
        };

        
    
    return (
        <div className="container items">
                    <ul className="list-inline">
                        <ReactCSSTransitionGroup {...menuTransitionOptions}>
                         {this.renderItemList()}
                        </ReactCSSTransitionGroup>
                    </ul>
            </div>
            )
    }
}

function mapStateToProps({selectedTags,items,selectedOrdering,firstTimeVisit}){
    return {selectedTags,items,selectedOrdering,firstTimeVisit}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({setSelectedOrdering:setSelectedOrdering,setFirstTimeVisit:setFirstTimeVisit},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
