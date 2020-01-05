import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import { link } from './constants/LinkConstants';

export default function MainRouter(props) {

    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route exact path={link.ROOT} component={Home} />
            </Switch>
        </BrowserRouter>
    )
};

