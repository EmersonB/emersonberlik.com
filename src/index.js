import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route,  hashHistory } from "react-router";

import Portfolio from "./components/portfolio";
import About from "./components/about";

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={Portfolio}/>
    <Route path="/about" component={About}/>



    </Router>,
    document.getElementById('root')
);
