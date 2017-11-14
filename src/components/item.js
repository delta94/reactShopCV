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
            <li className="list-inline-item">
                <div className="item">
                    <div className="itemImage">
                    <Link to={`/item/${this.props.item.id}`}>
                        <img className="imagem" src={this.props.item.image} alt="Card image cap" />
                    </Link>
                    </div>
                    <div className="itemDetailsWrapper">
                        <div className="itemName">{this.props.item.title}</div>
                        <div className="itemRating"><span>{this.renderRating(5)}</span></div>
                        <item className="price">{this.props.item.price}</item>
                    </div>
                </div>
            </li>
        )
    }
}


export default connect(null,null)(Item);