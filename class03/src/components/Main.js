import React, { Component } from 'react';

import Product from './Product';


export default class Main extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     addedToCart: false,
  //     // passed: 'Passed Down'
  //   }
  // }

  // addItem = () => {
  //   this.setState({addedToCart: true}, ()=>console.log('item added to cart'));
  // }
  // removeItem = () => {
  //   this.setState({addedToCart: false}, ()=>console.log('item removed from  cart'));
  // }

  render() {
    return (
      <div>
       <h1>Some Products</h1>
       <img src='https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg' alt='A banana'/>
    {/* product component goes here */}
    {this.props.productData.map(product => {
        return(
        <Product title={product.title} description={product.description}  img={product.images[0]} key={product.id}/>
        )
    } )}

      </div>
    )
  }
}
