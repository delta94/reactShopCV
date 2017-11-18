import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


class Item extends Component{

    renderRating(nStars){
        
        // better way to do this
        let stars=[];

        for(let i = 1 ; i<6 ;i++){
            stars.push(i)
        }
     
        return stars.map(star => {
            return (<i key={star}className="fa fa-star"/>)
        })
    }
    
            
    
    
    render(){
        return(
            <div className="col-md-4">
                    <div className="itemImage">
                    <Link to={`/item/${this.props.item.id}`}>
                        <img className="img-thumbnail" src={this.props.item.image} alt={this.props.item.title} />
                    </Link>
                    </div>
                    <div className="itemDetailsWrapper">
                        <div className="itemName">{this.props.item.title}</div>
                        <div className="itemTag">{this.props.item.tag}</div>                        
                        <div className="itemRating pull-left"><span>{this.renderRating(5)}</span></div>
                        <div className="itemPrice pull-right">{this.props.item.price}€</div>
                    </div>
            </div>
        )
    }
}


export default connect(null,null)(Item);