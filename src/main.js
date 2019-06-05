import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from "./Home";
import PrivacyPolicy from "./PrivacyPolicy";
import Contact from "./Contact"

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/contact" component={Contact} />
    </Switch>
)


export default Main;