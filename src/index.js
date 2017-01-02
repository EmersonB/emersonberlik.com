import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route,  hashHistory } from "react-router";

import Portfolio from "./components/portfolio";
import About from "./components/about";
import Isitchristmas from "./components/isitchristmas";
import MobileAppClub from "./components/mobileAppClub"

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Portfolio}/>
    <Route path="/about" component={About}/>
    <Route path="/isitchristmas" component={Isitchristmas}/>
    <Route path="/mobileappclub" component={MobileAppClub}/>



    </Router>,
    document.getElementById('root')
);
