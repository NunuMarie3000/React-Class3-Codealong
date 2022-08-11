import React, { Component } from 'react';
import {Button, Card} from 'react-bootstrap';

export default class Product extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         cart: 0,
    //     }
    // }
    // handleClicks(){

    // this.setState((prev) => 
    // ({
    //   cart: prev.cart + 1
    // }))

    // }
    constructor(props){
      super(props)
      this.state = {
        addedToCart: false,
        // passed: 'Passed Down'
      }
    }
  
    addItem = () => {
      this.setState({addedToCart: true}, ()=>console.log('item added to cart'));
    }
    removeItem = () => {
      this.setState({addedToCart: false}, ()=>console.log('item removed from  cart'));
    }

  render() {
    return (
      <>
      {/* I will pass my data in this component, so I need to use this.props here */}

       {/* <h1>{this.props.title}</h1>
       <h3> </h3>
       <img  src={this.props.img} alt={this.props.title}/>
       <p>{this.props.description}</p>  */}

      <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={this.props.img} alt={this.props.title}/>
       <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>{this.props.description}</Card.Text>
        {this.state.addedToCart ? <Button onClick={this.removeItem} variant='warning'>Remove 🛒</Button> : <Button onClick={this.addItem} variant='primary'>Add 🛒 {/*{this.state.cart}*/}</Button>}
       </Card.Body>
      </Card>
      </>
    )
  }
}
