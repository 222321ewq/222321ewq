/*global google*/
import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker,InfoWindow } from 'react-google-maps'

const MapWithMarkers = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=--YOUR-KEY-GOES-HERE--&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `290%` }} />,
        containerElement: <div style={{ height: '200px'}} />,
        mapElement: <div style={{ height: `290%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={new google.maps.LatLng(40.6878282, -74.0652594)}>

        <MarkerWithInfoWindow position={{ lat: 40.585242, lng: -73.9530957 }} content="Main Office"/>
        <MarkerWithInfoWindow position={{ lat: 40.7123316, lng: -74.0102513 }} content="Lower Manhattan Office"/>
        <MarkerWithInfoWindow position={{ lat: 40.7299816, lng: -74.1769659 }} content="New Jersey Office"/>

    </GoogleMap>
);


class MarkerWithInfoWindow extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.onToggleOpen = this.onToggleOpen.bind(this);
    }

    onToggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (<Marker
            position={this.props.position}
            onClick={this.onToggleOpen}>
            {this.state.isOpen && <InfoWindow onCloseClick={this.onToggleOpen}>
                <h3>{this.props.content}</h3>
            </InfoWindow>}
        </Marker>)
    }
}

export default MapWithMarkers;
 
