import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import RootPage from 'containers/RootPage';

export default function () {
    return (
        <Router>
            <RootPage >
                <Switch>
                    <Route path='/dashboard/exhibition' component={MyExhibitions} />
                    <Route path='/dashboard/artwork' component={MyArtworks} />
                    <Route exact path='/' component={HomePage} />
                    <Redirect from='*' to='/' />
                </Switch>
            </RootPage>
        </Router>
    )
}