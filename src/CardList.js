import React from 'react';
import Card from './Card';
import Loader from './LoaderHoc';

const CardList = (props) => {
    const {list} = props;
    return (
        <div className="grid">
            {
                list.map((obj, i) => {
                    return <Card card={obj} key={i} {...props}/>
                })
            }
        </div>
    )
}

export default Loader(CardList);