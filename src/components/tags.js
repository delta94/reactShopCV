import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectTag} from '../actions/actions_index.js'
import { tags } from '../data/data.js';

class Tags extends Component{

    onTagClick(event){
        console.log('on tag component');
        this.props.selectTag(event.target.value);
    }


    renderTagsList(){
        return tags.map(tag => {
            return(
                <li className="list-group-item" key={tag}>
                    <input type="checkbox" value={tag} onClick={(event) =>this.onTagClick(event)}/>{tag}
                </li>
            )
        });
    }


    render(){
        return (
        <div className="list-group">
            <h3>Categories</h3>
            {this.renderTagsList()}
        </div>
        )
    }
}


function mapStateToProps({selectedTags}){
    return {selectedTags};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectTag:selectTag},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Tags)