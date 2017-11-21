import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectTag,setSelectedOrdering,selectRating,setFirstTimeVisit} from '../actions/actions_index.js'
import {numberOfTags, orderingType} from '../data/data.js'
import _ from 'lodash'
import {renderRating} from '../helpers/helpers.js'

class Tags extends Component{

    constructor(props){
        super(props);
        this.state = {selectedOrdering:null};
        this.onSelectChange = this.onSelectChange.bind(this);
    }

    componentDidMount(){
        
        this.setState({selectedOrdering:this.props.selectedOrdering})
    }
    
    //change the name of this method
    onSelectChange(event){
        this.props.setFirstTimeVisit();
        this.setState({selectedOrdering:event.target.value})
        this.props.setSelectedOrdering(event.target.value)
    }

    onTagChange(event){
        this.props.setFirstTimeVisit();
        this.props.selectTag(event.target.value);
    }

    onRatingChange(event){
        this.props.setFirstTimeVisit();
        this.props.selectRating(event.target.value)
    }

    renderTagsList(){
        const tagsArr = _.values(this.props.selectedTags);
        return tagsArr.map(tag => {
            return(
                <li key={tag.description}>
                    <label className="tagWrapper">
                        <input type="checkbox" value={tag.description} onChange={(event) =>this.onTagChange(event)} checked = {tag.selected}/>
                        <span className="tagLabel">{tag.description}</span>
                    </label>
                </li>
            )
        });
    }

    renderRatingList(){

        let liListOfRatings = []

        for (let i=5 ; i >=1 ; i--){
            liListOfRatings.push(i)
        }

        return liListOfRatings.map(li => {
            return(
                <li key={li}>
                <label className="ratingWrapper">
                    <input type="checkbox" value={li} onChange={(event) =>this.onRatingChange(event)} checked={this.props.selectedRatings[li]}/>
                    <span className="tagLabel">{renderRating(li)}</span>
                </label>
            </li>
                )
        })
    }

    render(){
        return (
        <div className="col-md-2 aside">
            <strong><p>Filter by:</p></strong>
            <p className>Category</p>
            <ul className="tagList">
                {this.renderTagsList()}
            </ul>
            <p>Rating</p>
            <ul className="tagList">
                {this.renderRatingList()}
            </ul>
            <div className="container-fluid menu"></div>
            <div className="select">
            <strong><p className="SortByTitle">Sort by:</p></strong>
            <select value={this.state.selectedOrdering} className="filterSelect" onChange={this.onSelectChange}>
                <option value={orderingType.category}>{orderingType.category}</option>
                <option value={orderingType.priceAsc}>{orderingType.priceAsc}</option>
                <option value={orderingType.priceDesc}>{orderingType.priceDesc}</option>
                <option value={orderingType.rating}>{orderingType.rating}</option>                
            </select>
        </div>
        </div>
        )
    }
}

function mapStateToProps({selectedTags,selectedOrdering,selectedRatings}){
    return {selectedTags:selectedTags.types,selectedOrdering,selectedRatings};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectTag:selectTag,setSelectedOrdering:setSelectedOrdering,selectRating,setFirstTimeVisit},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tags)
