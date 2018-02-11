import { Component } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';

class Card extends Component {
    
    
    render() {
        const {card} = this.props;

        return (
            <div className="card">
                <img src={card.url} alt="Avatar"/>
                {card.visible ? <button disabled={!card.visible} onClick={(e) => (this.props.addThisCard(card, e))}>Add to Cart</button>: null}
                <div className="container">
                    <Link to={`/details/${card.id}`}>
                        <h4><b>{card.title}</b></h4> 
                    </Link>
                </div>
            </div>
        );
    }
}


export default Card;