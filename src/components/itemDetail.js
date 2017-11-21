import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {addToCart, updateStock, setFirstTimeVisit} from '../actions/actions_index.js'
import {bindActionCreators} from 'redux'
import Navbar from './navbar.js';
import AlertContainer from 'react-alert'
import {renderRating} from '../helpers/helpers.js'


class ItemDetail extends Component{
    
    alertOptions = {
    offset: 14,
    position: 'bottom left',
    time: 0,
    theme: 'dark',
    transition: 'scale'
    }

    componentDidMount(){
        this.props.setFirstTimeVisit();
    }

    showAlert = () => {
        this.msg.show('Item added to Cart', {
            time: 1000,
            type: 'success',
            icon: <img />
        })
    }

    renderImageOrVideo(item){
        if(item.video){
            return (<div dangerouslySetInnerHTML={{__html:item.video}}></div>)
        } else {
            return(<img src={item.image}></img>)
        }
    }

    renderItemLink(item){
        if(item.link){
            console.log('here');
            return(
                <div className>
                    <h4 className="itemDetailTitle">Links</h4>
                    <i className="fa fa-link fa-itemDetail" aria-hidden="true"></i>
                    <Link className="text-justify" to={item.link}>Follow Me!</Link>
                </div>
            )
        }

        if(item.externalLink){
            return(
                <div className>
                <h4 className="itemDetailTitle">Links</h4>
                <i className="fa fa-link fa-itemDetail" aria-hidden="true"></i>
                <a href={item.externalLink}>Follow Me!</a>
            </div>
            )
        }
    }

    updateStock(id){
        this.props.updateStock(id);
    }

    addToCart(id){
        this.props.addToCart(id);
    }

    renderAddToCartButton(item){
        if(item.stock >0){
            return (
                <div className="pull-right">
                    <button className="btn btn-primary addToCartBtn" onClick={() => {
                    this.showAlert()
                    this.addToCart(this.props.item.id);
                    this.updateStock(this.props.item.id)
                    }}>Add to Cart
                </button>
                </div>  
            )
        }  
    }

    render(){

        let stockLevelAlert

        if(this.props.item.stock >=1 && this.props.item.stock <=5){
            stockLevelAlert = <div className="text-danger pull-right stock-alert">Hurry up! Only {this.props.item.stock} available!</div>
        } else if(this.props.item.stock == 0){
            stockLevelAlert = <div className="text pull-right soldOut">Too late, item is sold out <i className="fa fa-frown-o" aria-hidden="true"></i></div>
        } else {
            stockLevelAlert=null
        }

        console.log(this.props.item);

        return(
            <div> 
                <Navbar />
                <div className="container itemDetail">
                    <div className="col-md-12 col-sm-12 col-xs-12 itemDetailImage">
                        {this.renderImageOrVideo(this.props.item)}
                        
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 itemDetailDescription">
                        <h4 className="itemDetailTitle">{this.props.item.title}</h4>
                        <p className="itemDetailDescritionText text-justify">{this.props.item.description}</p>
                        {this.renderItemLink(this.props.item)}
                        <h4 className="itemDetailTitle">Product Info</h4>
                        <div className="itemDetailIcons">
                            <p><i className="fa fa-itemDetail fa-tag" aria-hidden="true"></i>{(this.props.item.price).toFixed(2)} €</p>
                            <p><i className="fa fa-itemDetail fa-puzzle-piece" aria-hidden="true"></i>{this.props.item.tag}</p>
                            {stockLevelAlert}
                            <p><i className="fa fa-itemDetail starBlack fa-star"></i>Reviews: {renderRating(this.props.item.rating)}</p>
                        </div>
                        
                        <Link to="/" className="btn backButton pull-right">Back</Link>
                        {this.renderAddToCartButton(this.props.item)}
                        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                    </div>
                </div>
                
            </div>

        )
    }
}

function mapStateToProps(state,ownProps){
    return { item:state.items[ownProps.match.params.id], cart:state.cart}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToCart:addToCart ,updateStock:updateStock,setFirstTimeVisit}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemDetail);