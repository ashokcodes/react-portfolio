import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
    </Switch>
)


export default Main;