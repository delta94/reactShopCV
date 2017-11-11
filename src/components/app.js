import React, { Component } from 'react';
import Navbar from './navbar.js'
import Menu from './menu.js'
import Tags from './tags.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="col-md-2"><Tags/></div>        
        <div className="container col-md-10">
            <Menu />  
        </div>

      </div>
    );
  }
}
