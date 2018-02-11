import React, { Component } from 'react';


class ShoppingCart extends Component {
    render() {
        const {cartList} = this.props;
        return (
            <ul>
                {
                    cartList.map((card,i) => (
                        <li key={i}>{card.title}</li>
                    ))
                }
            </ul>
        );
    }
}


export default ShoppingCart;


