import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Item from '../components/item.js'
import {setSelectedOrdering ,setFirstTimeVisit, isPageChange, memorizeLastPage, selectRating} from '../actions/actions_index.js'
import {bindActionCreators} from 'redux'
import {numberOfTags, orderingType, itemsPerPage, totalItems} from '../data/data.js'
import Pagination from 'react-js-pagination'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


//this is a smart component. Needs to have access to items to render from state

class Menu extends Component{

    constructor(props){
        super(props)
        this.state={activePage:1}
        this.selectedItemCount = 0
    }

    componentWillMount(){
        this.setState({activePage:this.props.lastVisitedPage})
    }

    handlePageChange(pageNumber){
        this.setState({activePage: pageNumber});
        this.props.isPageChange();
        this.props.memorizeLastPage(pageNumber);
    }

    renderRating(nStars){
        // better way to do this
        let stars=[];

        for(let i = 1 ; i<=nStars ;i++){
            stars.push(i)
        }
     
        return stars.map(star => {
            return (<i key={star}className="fa fa-star"/>)
        })
    }

    renderPagination(){
        const paginationOptions = {
            activePage:this.props.isTagChange ? 1 : this.state.activePage,
            itemsCountPerPage:itemsPerPage,
            totalItemsCount:this.selectedItemCount,
            pageRangeDisplayed: Math.ceil(this.selectedItemCount/itemsPerPage)
        }

        if(paginationOptions.totalItemsCount <= paginationOptions.itemsCountPerPage){
            return;
        }else{
            return (
                <Pagination {...paginationOptions} onChange={(pageNumber)=>this.handlePageChange(pageNumber)}>
                </Pagination>
            )
        }        
    }

    orderItems(items){
        const ordering = this.props.selectedOrdering;

        let orderedItems = null;
        switch (ordering){
            case (orderingType.category):
            orderedItems = items.sort((a,b) => {
                if(a.tag < b.tag){
                    return -1
                }
                if(a.tag > b.tag){
                    return 1
                }
                return 0
            })
            break;
            case (orderingType.priceAsc):
                orderedItems =  items.sort((a,b) => a.price-b.price)
                break;
            case (orderingType.priceDesc):
                orderedItems =  items.sort((a,b) => b.price-a.price)
                break;
            default:
            return items
        }
        return orderedItems
    }

    renderItemList(pageNumber){
        const itemsArr = _.valuesIn(this.props.items);
        const activeTags = _.mapValues(this.props.selectedTags,tag => tag.selected);
        const activeTagsCount = Object.values(activeTags).reduce((accumulator,current) => {
            if(current){
                return accumulator+1
            } else {
                return accumulator
            }
        },0);
        const activeRatings = Object.values(this.props.selectedRatings)
        const activeRatingsCount = activeRatings.reduce((accumulator,current) => {
            if(current){
                return accumulator+1
            } else{
                return accumulator
            }
        },0)

        

        const orderedItemsArr = this.orderItems(itemsArr);

        const selectedItemsArr = orderedItemsArr.reduce((result, item) => {

            //1-Nothing is selected
            //2- a skill is selected but no filters
            // 3
            // 4 - at least on skill and one filter is selected
            
            if((activeTagsCount === numberOfTags || activeTagsCount === 0) && activeRatingsCount === 0 ){
                result.push(<Item item={item} key={item.id} renderRating={this.renderRating}/>)
                return result;
            }else if(activeTagsCount > 0 && activeRatingsCount === 0){
                if(this.props.selectedTags[item.tag].selected){
                    result.push(<Item item={item} key={item.id} renderRating={this.renderRating}/>)
                }
                return result
            } else if((activeTagsCount === numberOfTags || activeTagsCount === 0) && activeRatingsCount > 0){
                if(this.props.selectedRatings[item.rating]){
                    result.push(<Item item={item} key={item.id} renderRating={this.renderRating}/>)
                }
                return result
            } else if(this.props.selectedTags[item.tag].selected && this.props.selectedRatings[item.rating]){
                result.push (<Item item={item} key={item.id} renderRating={this.renderRating}/>)
                return result;
            } else{
                return result;
            }
        },[]);

        this.selectedItemCount = selectedItemsArr.length;
            
        if(pageNumber === 1 || this.props.isTagChange){
                return selectedItemsArr.slice(0,itemsPerPage);
            } 

            const pagedItems = selectedItemsArr.slice(itemsPerPage*pageNumber-itemsPerPage,itemsPerPage*pageNumber);
            return pagedItems;
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
                    <div className="col-md-12">
                        <ReactCSSTransitionGroup {...menuTransitionOptions}>
                         {this.renderItemList(this.state.activePage)}
                        </ReactCSSTransitionGroup>
                        {this.renderPagination()}
                    </div>
                    
            </div>
            
            )
    }
}

function mapStateToProps({selectedTags,selectedRatings, items,selectedOrdering,firstTimeVisit,lastVisitedPage}){
    return {selectedTags:selectedTags.types,isTagChange:selectedTags.tagChange,items,selectedOrdering,firstTimeVisit,lastVisitedPage,selectedRatings}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({setSelectedOrdering:setSelectedOrdering,setFirstTimeVisit,isPageChange,memorizeLastPage,selectRating},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
