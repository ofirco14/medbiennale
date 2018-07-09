
import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


import './Map.css';


class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  render() {
    const style = {
        width: '100%',
      }

    return (
        <div>


        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 32.864167,
            lng: 35.294546999999966
          }}
          zoom={14}
          onClick={this.onMapClicked}>
       
          <Marker
          onClick={this.onMarkerClick}
          title={'#PLACE 1'}
          name={'Address number 1#'}
          position={{lat: 32.864167, lng: 35.294546999999966}} />
          
          <Marker
          onClick={this.onMarkerClick}
          title={'#PLACE 2'}
          name={'Address number 2 #'}
          position={{lat: 32.868240234061936, lng: 35.28653658277699}} />
          
          <Marker
          onClick={this.onMarkerClick}
          title={'#PLACE 3'}
          name={'Address number 3 #'}
          position={{lat: 32.869213456985975, lng: 35.29680810219952}} />
          
                    
          <Marker
          onClick={this.onMarkerClick}
          title={'#PLACE 4'}
          name={'Address number 4 #'}
          position={{lat: 32.866654218261765, lng: 35.30308849460789}} />
          
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
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