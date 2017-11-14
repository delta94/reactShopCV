import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class Item extends Component{
    
    
    render(){
        return(
            <li className="list-inline-item">
                <Link to={`/item/${this.props.item.id}`}>
                    <img src={this.props.item.image} alt="Card image cap" />
                </Link>
                    <p>{this.props.item.description},{this.props.item.price}</p>
            </li>
        )
    }
}


export default connect(null,null)(Item);