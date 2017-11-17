import React, { Component } from 'react';
import Navbar from './navbar.js'
import Menu from './menu.js'
import Tags from './tags.js'
import Footer from './footer.js'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main">
            <Tags/>
            <Menu />
        </div>
        <Footer /> 
      </div>
    );
  }
}
