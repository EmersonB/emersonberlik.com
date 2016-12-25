import React, { Component } from 'react'
import { Link,Router, Route, IndexRoute, hashHistory } from "react-router";

class Isitchristmas extends Component {

    render(){
        // high-performance modern Christmas detection technology
        var isit;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }
        if(mm == 12 && dd == 25){
            isit =<div>Yes</div>;
        }
        else {
            isit = <div> No </div>;
        }
        return (
            <div className = "text-center">
                {isit}
                <img src = "img/santa.jpg" alt = ""/>
        </div>

    )
    }
}
export default Isitchristmas;
