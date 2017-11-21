import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Item from '../components/item.js'
import {setSelectedOrdering ,setFirstTimeVisit, isPageChange, memorizeLastPage, selectRating} from '../actions/actions_index.js'
import {bindActionCreators} from 'redux'
import {numberOfTags, orderingType, itemsPerPage,itemsPerRow, totalItems} from '../data/data.js'
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
        this.props.isPageChange();
        this.props.setFirstTimeVisit();
        this.props.memorizeLastPage(pageNumber);
        this.setState({activePage: pageNumber});
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
            activePage:(this.props.isTagChange || this.props.isRatingChange) ? 1 : this.state.activePage,
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
            case(orderingType.rating):
                orderedItems = items.sort((a,b) => b.rating - a.rating)
            default:
            return items
        }
        return orderedItems
    }

    renderItemList(pageNumber){
        const menuTransitionOptions = {
            transitionName:"menu",
            transitionAppear:this.props.firstTimeVisit,
            transitionEnter:false,
            transitionLeave:false,
            transitionAppearTimeout:2000,
            transitionLeaveTimeout:2500,
            transitionEnterTimeout:2500,
        };

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
            //2- a skill is selected but no ratings
            //3 - a rating is selected but no skills
            //4 - at least on skill and one rating is selected
            
            if((activeTagsCount === numberOfTags || activeTagsCount === 0) && activeRatingsCount === 0 ){
                result.push(<ReactCSSTransitionGroup key={item.id} {...menuTransitionOptions}><Item item={item}  renderRating={this.renderRating}/></ReactCSSTransitionGroup>)
                return result;
            }else if(activeTagsCount > 0 && activeRatingsCount === 0){
                if(this.props.selectedTags[item.tag].selected){
                    result.push(<ReactCSSTransitionGroup key={item.id} {...menuTransitionOptions}><Item item={item}  renderRating={this.renderRating}/></ReactCSSTransitionGroup>)
                }
                return result
            } else if((activeTagsCount === numberOfTags || activeTagsCount === 0) && activeRatingsCount > 0){
                if(this.props.selectedRatings[item.rating]){
                    result.push(<ReactCSSTransitionGroup key={item.id} {...menuTransitionOptions}><Item item={item}  renderRating={this.renderRating}/></ReactCSSTransitionGroup>)
                }
                return result
            } else if(this.props.selectedTags[item.tag].selected && this.props.selectedRatings[item.rating]){
                result.push (<ReactCSSTransitionGroup key={item.id} {...menuTransitionOptions}><Item item={item}  renderRating={this.renderRating}/></ReactCSSTransitionGroup>)
                return result;
            } else{
                return result;
            }
        },[]);

        this.selectedItemCount = selectedItemsArr.length;

        if(selectedItemsArr.length === 0){
            return (
                <div className="noItemsForFilters">
                    <h1>
                        Oops! There are no items for the selected filters.
                    </h1>
                </div>
        )
        }

        let pagedItems = null;

            
        if(pageNumber === 1 || this.props.isTagChange){
                pagedItems = selectedItemsArr.slice(0,itemsPerPage);
            } 

            pagedItems = selectedItemsArr.slice(itemsPerPage*pageNumber-itemsPerPage,itemsPerPage*pageNumber);

            
             let formatedPagedItems = [];
             let rowIndex = 1

            pagedItems.reduce((result,currentValue,index) => {
                
                if(rowIndex === 1 && (index+1) < pagedItems.length){
                    result.push(currentValue)
                    rowIndex++
                    return result
                }
                
                //last item in row
                else if(rowIndex === 3 ||(index+1) === pagedItems.length){
                    result.push(currentValue)
                    formatedPagedItems.push(<div className="row" key={Math.random()}><div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">{result}</div></div>)
                    result=[];
                    rowIndex = 1
                    return result
                } 
                //middle item
                else{
                    rowIndex++;
                    result.push(currentValue);
                    return result;
            }
        },[]);

            return formatedPagedItems;
        };

    render(){
        let pageToRender = null;
        (this.props.isTagChange || this.props.isRatingChange) ? pageToRender = 1 : pageToRender = this.state.activePage
    return (
        <div className="container">
            <div className="col-xs-offset-1 col-xs-11 col-sm-offset-1 col-sm-11 col-md-offset-1 col-md-11 col-lg-offset-1 col-lg-11">
                {this.renderItemList(pageToRender)}
                <div className="paginationWrapper pull-right">
                    {this.renderPagination()}
                </div>
            </div>
        </div>
            )
    }
}

function mapStateToProps({selectedTags,selectedRatings,isRatingChange, items,selectedOrdering,firstTimeVisit,lastVisitedPage}){
    return {selectedTags:selectedTags.types,isTagChange:selectedTags.tagChange,items,selectedOrdering,firstTimeVisit,lastVisitedPage,selectedRatings:selectedRatings.rates, isRatingChange: selectedRatings.isRatingChange}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({setSelectedOrdering:setSelectedOrdering,setFirstTimeVisit,isPageChange,memorizeLastPage,selectRating},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
