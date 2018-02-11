
import App from './App';
import React, { Component } from 'react';

class DynamicImport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            component: null
        }
    }

    componentWillMount() {
        this.props.load()
            .then((c) => this.setState(()=> (
                {
                    component: c.default
                }
            )));
      
    }

    render() {
        return this.props.children(this.state.component);
    }
}

const Home = (props) => (
    <DynamicImport load={() => import('./Home.js')}>
        {
            (Component) => {
                return Component === null ? <div>loading</div> : <Component {...props}/>;
            }
        }
    </DynamicImport>
);

const routes = [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/details/:id',
        component: Home
    }
];

export default routes;

