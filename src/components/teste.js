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
        //     <nav aria-label="Page navigation">
        //     <Pagination
        //   activePage={this.state.activePage}
        //   itemsCountPerPage={1}
        //   totalItemsCount={10}
        //   pageRangeDisplayed={5}
        //   onChange={this.handlePageChange}
        //   classNameName="pagination">
        //     </Pagination>
        // </nav>

<nav aria-label="Page navigation">
  <ul className="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a href="#">1</a></li>
    <li className="page-item"><a href="#">1</a></li>
    <li className="page-item"><a href="#">1</a></li>
    <li className="page-item"><a href="#">2</a></li>
    <li className="page-item"><a href="#">3</a></li>
    <li className="page-item"><a href="#">4</a></li>
    <li className="page-item"><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>


        )
    }
}

export default Teste;