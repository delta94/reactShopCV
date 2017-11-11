import React,{Component} from 'react'
import {connect} from 'react-redux'

class Item extends Component{
    
    
    render(){
        return(
        <div className="col-md-3 article">
            <img src="" alt="Card image cap" />
            <div>
                <p>{this.props.item.description}</p>
            </div>
            <button onClick = {this.props.onClick}></button>
                
        </div>
        )
    }
}


export default connect(null,null)(Item)