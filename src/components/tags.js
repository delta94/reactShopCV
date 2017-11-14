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
                <li className="tagListItem" key={tag.description}>
                    <label>
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
            <p className="tagTitle">Show results for:</p>
            <ul className="tagList">
                {this.renderTagsList()}
            </ul>
        </aside>
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