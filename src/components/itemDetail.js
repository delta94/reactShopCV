import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {addToCart, updateStock} from '../actions/actions_index.js'
import {bindActionCreators} from 'redux'
import Navbar from './navbar.js';
import AlertContainer from 'react-alert'


class ItemDetail extends Component{
    
    alertOptions = {
    offset: 14,
    position: 'bottom left',
    theme: 'dark',
    transition: 'scale'
    }

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

    renderImageOrVideo(item){
        if(item.video){
            return (<div dangerouslySetInnerHTML={{__html:item.video}}></div>)
        } else {
            return(<img src={item.image}></img>)
        }
    }

      
    showAlert = () => {
    this.msg.show('Item added to Cart', {
        time: 0,
        type: 'success',
        icon: <img />
    })
    }

    updateStock(id){
        this.props.updateStock(id);
    }

    addToCart(id){
        this.props.addToCart(id);
    }

    renderAddToCartButton(item){

        let stockLevelAlert

        (item.stock >=1 && item.stock <=5) ? stockLevelAlert = <div className="text-danger">Hurry up! Only {item.stock} available!</div> : stockLevelAlert=null 
         

        if(item.stock >0){
            return (
                <div className="pull-right">
                    {stockLevelAlert}
                    <button className="btn btn-primary addToCartBtn" onClick={() => {
                    this.showAlert()
                    this.addToCart(this.props.item.id);
                    this.updateStock(this.props.item.id)
                    }}>Add to Cart
                </button>
                </div>  
            )
        } else{
            return <h4>Too late! Item is sold out!</h4>
        }

        
    }

    render(){
        return(
            <div> 
                <Navbar />
                <div className="container itemDetail">
                    <div className="col-md-12 col-sm-12 col-xs-12 itemDetailImage">
                        {this.renderImageOrVideo(this.props.item)}
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/zJB-Ux4ScSA" frameBorder="0" allowFullScreen></iframe> */}
                        
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 itemDetailDescription">
                        <h4 className="itemDetailTitle">{this.props.item.title}</h4>     
                        <p className="itemDetailDescritionText text-justify">Bacon ipsum dolor amet tail ham strip steak meatball jowl. Ribeye beef pastrami meatball strip steak doner, spare ribs short ribs biltong landjaeger bresaola pancetta. Turducken pig pork belly, burgdoggen cow capicola pancetta picanha jowl short ribs beef ribs shankle ham hock. Turducken beef pig shoulder. Tongue strip steak shankle andouille bacon beef ribs sirloin shoulder swine kevin picanha turducken. Alcatra ham turducken capicola tenderloin</p>
                        <h4 className="itemDetailTitle">Product Info</h4>
                        <div className="itemDetailIcons">
                            <p><i className="fa fa-itemDetail fa-tag" aria-hidden="true"></i>{this.props.item.price} €</p>
                            <p><i className="fa fa-itemDetail fa-puzzle-piece" aria-hidden="true"></i>{this.props.item.tag}</p>
                            <p><i className="fa fa-itemDetail starBlack fa-star"></i>Reviews: {this.renderRating(5)}</p>
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
    return bindActionCreators({addToCart:addToCart ,updateStock:updateStock}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemDetail);