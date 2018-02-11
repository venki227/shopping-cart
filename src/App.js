import React, { Component } from 'react';
import './App.scss';
import CardList from './CardList';
import ShoppingCart from './ShoppingCart';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      cartList: []
    }
    this.addThisCard = this.addThisCard.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then((res) => {
      this.setState({
        photos: res.slice(0, 21).map((c) => {c.visible=true; return c})
      })
    })
  }

  addThisCard(card) {
    card.visible = false;
    this.setState({
      cartList: [...this.state.cartList, card]
    })
  }

  render() {
    return (
      <div className="App">
          <input type="text" />
          <ShoppingCart cartList={this.state.cartList}></ShoppingCart>
          <CardList addThisCard= {this.addThisCard} list = {this.state.photos}/>
      </div>
    );
  }
}

export default App;
