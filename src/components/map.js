import React, { Component } from 'react'
import { Link,Router, Route, IndexRoute, hashHistory } from "react-router";
import {Map, Marker, InfoWindow} from "google-maps-react";
import {GoogleApiWrapper} from 'google-maps-react'


export class Container extends Component{

    constructor(props, context){
        super(props, context)
        this.onMapMoved = this.onMapMoved.bind(this)
        this.onInfoWindowClose = this.onInfoWindowClose.bind(this)
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.onMapClicked = this.onMapClicked.bind(this)
        this.state ={
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    onMapMoved(props, map) {
        const center = map.center
    }

    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onInfoWindowClose() {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    }

    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render() {
        if (!this.props.loaded) {
            return <div>Loading...</div>
        }
        var hannibal = <div className = "header7"> St.Petersburg <br/> <div className = "h7"> Huck begins the book here with widow Watson. Huck here finds his old friend Tom Sawyer who asks him to join a gang. There is a social hierarchy in this town. The adults all hold more power than the children, especially the white adult men. </div></div>
        var mississippi = <div className = "header7"> Mississippi River <br/> <div className = "h7"> Huck and Jim are floating down the Mississippi together, Huck to get away from oppression, and Jim to get to a free state. Although they are friends, Huck has many doubts about what he is doing, and at some times, consideres turning Jim in. He later resolves to do whatever is needed to do the right thing. This relates to Marxist because Huck was raised, being taught that whites are superior to the slaves.</div></div>
        var bainbridge = <div className = "header7"> Walter Scott Wreck <br/> <div className = "h7"> This is the wreck of the Walter Scott. Huck tells Jim about kings and dukes, and Jim, who was a runaway slave, is suprised that kings can be so powerful without having to work. On the contrary, slaves work a great deal without having any power. "They don't do nothing! Why, how you talk! They just set around" (Twain 77). </div></div>
        return (
            <Map google={this.props.google}
        initialCenter = {{lat: 39.7084, lng: -91.3585}}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={14}
        onClick={this.onMapClicked}>
    <Marker
        onClick={this.onMarkerClick}
        name={hannibal}
        position={{lat: 39.7084, lng: -91.3645}} />
    <Marker
        onClick={this.onMarkerClick}
        name={mississippi}
        position={{lat: 39.620744, lng: -91.226710}} />
    <Marker
        onClick={this.onMarkerClick}
        name={bainbridge}
        position={{lat: 37.410616, lng: -89.437030}} />

            <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
        onClose={this.onInfoWindowClose}>
    <div>
        <h3>{this.state.selectedPlace.name}</h3>
        </div>
        </InfoWindow>
        </Map>
    )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBbGfp8Zr7U_7pvDI2hpB99w1J3kzTRv0c"
})(Container)




