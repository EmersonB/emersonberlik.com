/**
 * Created by Emerson on 1/1/17.
 */
import React, { Component } from 'react'
import { Link,Router, Route, IndexRoute, hashHistory } from "react-router";


class mobileAppClub extends Component {

    render(){
        return (
            <div>

            <h3 className= "text-center"> Mobile App Club </h3>
            <div className="container3">
            <div className="iphone-front"></div>
            <div className="iphone-back"></div>
            </div>

            </div>
    )
    }
}
export default mobileAppClub;