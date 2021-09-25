import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import RootPage from 'containers/RootPage';
import HomePage from 'components/HomePage';

export default function () {
    return (
        <Router>
            <RootPage >
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Redirect from='*' to='/' />
                </Switch>
            </RootPage>
        </Router>
    )
}