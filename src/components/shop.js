import React, { Component } from 'react';
import Navbar from './navbar.js'
import Menu from './menu.js'
import Tags from './tags.js'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
        <Tags/>
        <div className="container-fluid col-sm-9 items">
            <Menu />  
        </div>
        </div>
      </div>
    );
  }
}
