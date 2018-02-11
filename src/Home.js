import { Component } from 'react';
import React from 'react';
import Card from './Card';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            card: null
        }
    }
    componentWillMount() {
        const {match: {params: {id}}} = this.props;
        fetch('https://jsonplaceholder.typicode.com/photos?id='+id)
            .then(res => res.json())
            .then((res) => {
                this.setState(()=>({
                    card: res[0]
                }))
            });
    }

    render() {
        const {card} = this.state
        return (
            <div className='detail-card'>
                <Link to='/'>Back</Link>
                {card ? <Card card = {card}/>: card !== null ? 'Not Found' : 'loading'}
            </div>
        )
        
    }


}

export default Home;