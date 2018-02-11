
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import routes from './Routes';

const Root = () => (

    <Switch>
        {
            routes.map((route, i) => (
                <Route key={i} {...route}></Route>
            ))
        }
    </Switch>
        
);

export default Root;
