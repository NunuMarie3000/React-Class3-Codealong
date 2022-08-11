
import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';

import data from './data.json';
let productData = data.products;


export default class App extends Component {

  render() {
    return (
      <>
        <Header />
        
        <Main productData={productData}/>
       
      </>
    )
  }
}
