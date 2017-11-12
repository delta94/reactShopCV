import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectTag} from '../actions/actions_index.js'
import _ from 'lodash'

class Tags extends Component{

    onTagChange(event){
        this.props.selectTag(event.target.value);
    }

    renderTagsList(){
        const tagsArr = _.values(this.props.selectedTags);
        return tagsArr.map(tag => {
            return(
                <li className="list-group-item" key={tag.description}>
                    <input type="checkbox" value={tag.description} onChange={(event) =>this.onTagChange(event)} checked = {tag.selected}/>{tag.description}
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