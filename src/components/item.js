import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class Item extends Component{
    
    
    render(){
        return(
        <div className="col-md-3 article item">
            <Link to={`/item/${this.props.item.id}`}>
                <img src={this.props.item.image} alt="Card image cap" />
              </Link>
            <div>
                <p>{this.props.item.description}</p>
                <p>{this.props.item.price}</p>                
            </div>
        </div>
        )
    }
}


export default connect(null,null)(Item);