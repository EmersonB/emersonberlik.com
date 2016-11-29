import React, { Component } from 'react'
import { Link,Router, Route, IndexRoute, hashHistory } from "react-router";
class Portfolio extends Component {

    render(){
        return (
            <div>
            <header className="row">
            <div className="logo col-xs-offset-1 col-xs-7 col-sm-offset-2 col-sm-6">
            <a href="http://www.emersonberlik.com/"><img src="img/emersonlogo.png"/>
            </a>
            </div>
            <nav className="top-nav col-xs-17 col-sm-offset-2 col-sm-14">
            <h5 className="is-active x-small">
            <a href="http://www.emersonberlik.com/">Portfolio</a>
            </h5>
            <h5 className="x-small">
            <a href="http://www.emersonberlik.com/#/about" onClick={()=>window.location.reload()}>About</a>
            </h5>
            </nav>
            </header>
            <div className="home-projects animated fadeInUp">
            <section className="cover-photos row text-centered">
            <div className="col-xs-offset-1 col-xs-24 square ">
            <a href="https://honorcodedev.herokuapp.com">
            <div className="blobs">
            <div className="blob">1</div>
            <div className="blob">2</div>
            <div className="blob">3</div>
            <div className="blob">4</div>
            </div>
                </a>
            <img src="img/macbook.png"/>
            </div>


            </section>
            </div>
            <footer className="row">
            <div className="footer-logo col-xs-offset-4 col-xs-18 col-sm-offset-2 col-md-offset-2 col-md-4">
            <img src="img/emersonlogo.png"/>
            </div>
            <nav className="bottom-nav col-xs-offset-4 col-xs-18 col-sm-offset-2 col-sm-6 col-md-offset-2 col-md-4">
            <ul>
            <li className="is-active">
            <h6><a href="http://www.emersonberlik.com/">Portfolio</a></h6>
            </li>
            <li>
            <h6><a href="http://www.emersonberlik.com/#/about" onClick={()=>window.location.reload()}>About</a></h6>
            </li>
            </ul>
            </nav>
            <div className="contact-info col-xs-offset-4 col-xs-18 col-sm-offset-2 col-sm-6 col-md-offset-2 col-md-4">
            <h6 className="phone-number">(571) 327-6988</h6>
        <a encode="javascript" href="mailto:eberlik@gmail.com">eberlik@gmail.com</a>
        </div>
        <div className="colophon col-xs-offset-4 col-xs-18 col-sm-offset-2 col-sm-6 col-md-offset-2 col-md-4">
            <div className="social-links">
            <a href="https://www.instagram.com/emersonberlik"><i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/emerson_berlik"><i className="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/emersonb"><i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
            </div>
            <p className="small">
            Portfolio for Emerson Berlik, student at Thomas Jefferson High School for Science and Technology
        </p>
        <p className="x-small">Copyright © 2016 Emerson Berlik. All Rights Reserved.</p>
        </div>
        </footer>
        </div>
    )
    }
}
export default Portfolio;