import React,{Component} from 'react';
import ReactDOM from "react-dom";
import Pagination from 'react-js-pagination'

class Teste extends Component{

    constructor(props) {
        super(props);
        this.state = {activePage: 1};
        this.handlePageChange = this.handlePageChange.bind(this);
  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

    render(){

        return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 teste">X</div>
            <div className="col-md-3 teste">y</div>
            <div className="col-md-3 teste">z</div>
            <div className="col-md-3 teste">z</div>            
          </div>
        </div>

        )
    }
}

export default Teste;