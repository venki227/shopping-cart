import React, {Component} from 'react';

const Loader = (Comp) => {
    return class Loader extends Component {
        render() { 
             return this.props.list.length === 0 ? <div>asdv</div> : <Comp {...this.props}/>
        }
    }
    
}



export default Loader