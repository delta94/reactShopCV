import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route , Switch} from 'react-router-dom';

import Shop from './components/shop';
import ItemDetail from './components/itemDetail.js'
import CheckoutList from './components/checkoutList.js'
import CheckoutEnd from './components/checkoutEnd.js'
import reducers from './reducers/reducers_index.js'
import Test from './components/teste.js'

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/item/:id" component={ItemDetail} />
          <Route path="/checkout/finish" component={CheckoutEnd}/>          
          <Route path="/checkout" component={CheckoutList} />
          <Route path="/teste" component={Test}/>
          <Route path="/" component={Shop}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
