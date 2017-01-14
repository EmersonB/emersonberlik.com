import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route,  hashHistory } from "react-router";

import Portfolio from "./components/portfolio";
import About from "./components/about";
import Isitchristmas from "./components/isitchristmas";
import MobileAppClub from "./components/mobileAppClub";
import Container from "./components/map";

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Portfolio}/>
    <Route path="/about" component={About}/>
    <Route path="/isitchristmas" component={Isitchristmas}/>
    <Route path="/mobileappclub" component={MobileAppClub}/>
    <Route path="/map" component={Container}/>



    </Router>,
    document.getElementById('root')
);
