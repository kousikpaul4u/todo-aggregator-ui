import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import { link } from './constants/LinkConstants';

const MainRouter = () => (
    <BrowserRouter basename="/">
        <Switch>
            <Route exact path={link.ROOT} component={Home} />
        </Switch>
    </BrowserRouter>
);

export default MainRouter;
