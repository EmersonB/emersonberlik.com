import React, { Component } from 'react'
import { Link,Router, Route, IndexRoute, hashHistory } from "react-router";
class About extends Component {

    render(){
        return (
            <div>
            <header className="row">
            <div className="logo col-xs-offset-1 col-xs-7 col-sm-offset-2 col-sm-6">
            <a href="http://www.emersonberlik.com/"><img src="img/emersonlogo.png"/>
            </a>
            </div>
            <nav className="top-nav col-xs-17 col-sm-offset-2 col-sm-14">
            <h5 className="x-small">
            <a href="http://www.emersonberlik.com/">Portfolio</a>
            </h5>
            <h5 className="is-active x-small">
            <a href="http://www.emersonberlik.com/#/about" onSubmit={function(){window.location.reload();}}>About</a>
            </h5>
            </nav>
            </header>
            <div className="row animated fadeInUp">
            <div className="col-xs-offset-2 col-xs-22 text-center">
            <h1>About</h1>
            </div>
            <div className="col-xs-offset-2 col-xs-22 col-sm-offset-5 col-sm-16 col-md-offset-6 col-md-14 col-lg-offset-8 col-lg-10">
            <div className="portrait col-xs-offset-2 col-xs-22 col-sm-offset-2 col-sm-10">
            <img src="img/portrait.png"/>
            </div>
            <p className="intro">
            Hello! My name is Emerson Berlik and I'm a student at Thomas Jefferson High School for Science and Technology. While I enjoy many academic subjects, computer science has a special place in my heart. I am very passionate about coding and hope to continue expanding my knowledge. Feel free to contact me at -
             <a encode="javascript" href="mailto:eberlik@gmail.com">eberlik@gmail.com</a></p>
            </div>
            </div>
            <div className="philosophy row">
            <div className="col-xs-offset-2 col-xs-22 text-center animated">
            <h2>More About me</h2>
        </div>
        <div className="col-xs-offset-2 col-xs-22 col-sm-10 col-md-6 col-lg-4 animated">
            <h5>
            Proficiencies.
        &nbsp;
    </h5>
        <span>I have experience with both front-end and back-end web development, however I am more knowledgeable in the former of the two. I have also had a great deal of interaction with Node.js and React.js. </span>
        </div>
        <div className="col-xs-offset-2 col-xs-22 col-sm-10 col-md-6 col-lg-4 animated">
            <h5>
            Academics.
    &nbsp;
    </h5>
        <span>I have attempted to maintain a curriculum with a strong focus in computer-science. Throughout my courses I have had much exposure to Java, Python and Android Studio. I am also experienced with different data structures.</span>
        </div>
        <div className="col-xs-offset-2 col-xs-22 col-sm-10 col-md-6 col-lg-4 animated">
            <h5>
            Qualification.
        &nbsp;
    </h5>
        <span>I am currently the webmaster for Thomas Jefferson High School's mobile app club. I am also currently working on the website for our chess team.</span>
        </div>
        <div className="col-xs-offset-2 col-xs-22 col-sm-10 col-md-6 col-lg-4 animated">
            <h5>
            Experience.
        &nbsp;
    </h5>
        <span>Over the summer of 2016, I interned for BroadSoft, Inc. I worked on quality assurance, as well as server-based tasks. I helped create scripts for BroadSoft's team-one software and used Amazon Web Services to create metric reports.</span>
        </div>

        </div>
            <footer className="row">
            <div className="footer-logo col-xs-offset-4 col-xs-18 col-sm-offset-2 col-md-offset-2 col-md-4">
            <img src="img/emersonlogo.png"/>
            </div>
            <nav className="bottom-nav col-xs-offset-4 col-xs-18 col-sm-offset-2 col-sm-6 col-md-offset-2 col-md-4">
            <ul>
            <li>
            <h6><a href="http://www.emersonberlik.com/">Portfolio</a></h6>
            </li>
            <li className="is-active">
            <h6><a href="http://www.emersonberlik.com/#/about" onSubmit={function(){window.location.reload();}}>About</a></h6>
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
export default About;