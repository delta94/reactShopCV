import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class Item extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-md-3 item">
                    <div className="img-fluid ">
                    <Link to={`/item/${this.props.item.id}`}>
                        <img className="item-img" src={this.props.item.image} alt={this.props.item.title} />
                    </Link>
                    </div>
                    <div className="itemDetailsWrapper">
                        <div className="itemName">{this.props.item.title}</div>
                        <div className="itemTag">{this.props.item.tag}</div>                        
                        <div className="itemRating pull-left"><span>{this.props.renderRating(this.props.item.rating)}</span></div>
                        <div className="itemPrice pull-right">{this.props.item.price}€</div>
                    </div>
            </div>
        )
    }
}


export default connect(null,null)(Item);