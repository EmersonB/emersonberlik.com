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

        return (
            <Map google={this.props.google}
        initialCenter = {{lat: 39.7084, lng: -91.3585}}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'map'}
        zoom={14}
        onClick={this.onMapClicked}>
    <Marker
        onClick={this.onMarkerClick}
        name={'St. Petersburg'}
        position={{lat: 39.7084, lng: -91.3645}} />
    <Marker
        onClick={this.onMarkerClick}
        name={'Jacksons Island'}
        position={{lat: 39.422390, lng: -91.200504}} />
    <Marker onClick={this.onMarkerClick}
        name={'Current location'} />

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




