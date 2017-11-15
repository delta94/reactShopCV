import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectTag} from '../actions/actions_index.js'
import {setSelectedOrdering} from '../actions/actions_index.js'
import {numberOfTags, orderingType} from '../data/data.js'

import _ from 'lodash'

class Tags extends Component{

    constructor(props){
        super(props);
        this.state = {selectedOrdering:null};

        this.onSelectChange = this.onSelectChange.bind(this);
    }

    componentDidMount(){
        this.setState({selectedOrdering:this.props.selectedOrdering})
    }
    
    onSelectChange(event){
        this.setState({selectedOrdering:event.target.value})
        this.props.setSelectedOrdering(event.target.value)
    }

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

    onTagChange(event){
        this.props.selectTag(event.target.value);
    }

    renderTagsList(){
        const tagsArr = _.values(this.props.selectedTags);
        return tagsArr.map(tag => {
            return(
                <li className="tagListItem" key={tag.description}>
                    <label className="tagWrapper">
                        <input type="checkbox" value={tag.description} onChange={(event) =>this.onTagChange(event)} checked = {tag.selected}/>
                        <span className="tagLabel">{tag.description}</span>
                    </label>
                </li>
            )
        });
    }


    render(){
        return (
        <aside className="tagAside">
            <p className="tagTitle">Filter by:</p>
            <ul className="tagList">
                {this.renderTagsList()}
            </ul>
            <div className="container-fluid menu"></div>
            <div className="select">
            <p className="tagTitle">Sort by:</p>
            <select value={this.state.selectedOrdering} className="filterSelect" onChange={this.onSelectChange}>
                <option value={orderingType.category}>{orderingType.category}</option>
                <option value={orderingType.priceAsc}>{orderingType.priceAsc}</option>
                <option value={orderingType.priceDesc}>{orderingType.priceDesc}</option>
            </select>
        </div>
        </aside>
        )
    }
}


function mapStateToProps({selectedTags,selectedOrdering}){
    return {selectedTags,selectedOrdering};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectTag:selectTag,setSelectedOrdering:setSelectedOrdering},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tags)