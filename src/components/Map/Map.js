
import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import waze from '../../img/navicons/waze.png'
import gmap from '../../img/navicons/gmaps.png'

import './Map.css';


class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        linkLat : '',
        linkLng : '',
      };
    onMarkerClick = (props, marker, e) =>
      
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      linkLat : marker.getPosition().lat(),
      linkLng : marker.getPosition().lng()
    }
  );


    render() {
      const {google} = this.props;
    const style = {
      
        height:'100vh'
      }
      

    return (
  <div className="middle">
        <Map
        google={this.props.google}
         style={style}
          initialCenter={{
            lat: 32.864167,
            lng: 35.294546999999966
          }}
          zoom={11}
          onClick={this.onMapClicked}>
       
          <Marker
          onClick={this.onMarkerClick}
          title={'Michas Hummus'}
          name={'Michas Hummus'}
          position={{lat: 32.862890, lng: 35.306119}}
          icon={{
            url: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue1.png',
           
          }}
          />
          <Marker
          onClick={this.onMarkerClick}
          title={'Sakhnins college'}
          name={'Sakhnins college' }
          position={{lat: 32.859779, lng: 35.310624}}
          icon={{
            url: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue2.png',
 
          }}
          />
          <Marker
          onClick={this.onMarkerClick}
          title={'Madams Hummus'}
          name={'Madams Hummus'}
          position={{lat: 32.869213456985975, lng: 35.29680810219952}} 
          icon={{
            url: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue3.png',
            anchor: google.maps.Point(32,32),
            scaledSize: google.maps.Size(64,64)
          }}
          />
               
          <Marker
          onClick={this.onMarkerClick}
          title={'Yarras resturant'}
          name={'Yarras resturant'}
          position={{lat: 32.822042, lng: 35.190056}}
          icon={{
            url: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue4.png',
            anchor: google.maps.Point(32,32),
            scaledSize: google.maps.Size(64,64)
          }}
          />
          
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div >
              <h6 style={{color:'rgb(184, 173, 130)',textDecoration:'underline'}}>{this.state.selectedPlace.name}</h6>
                <a href={ "https://www.google.com/maps/?q=" + this.state.linkLat + "," +  this.state.linkLng } target="_blank"><img alt="gmap" title="Google Maps" src={gmap}/></a>
                <span style={{fontWeight:'bold'}}> OR </span> 
              <a href={ "https://waze.com/ul?ll=" + this.state.linkLat + "," + this.state.linkLng  + "&navigate=yes"} target="_blank"><img alt="waze" title="Waze" src={waze}/></a>
              </div>
        </InfoWindow>
          </Map>
          </div>


    );
    
  }
  
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBgaiO6qS4O2Ghbm0Q5w4eKxBnukoosKyA")
  })(MapContainer)