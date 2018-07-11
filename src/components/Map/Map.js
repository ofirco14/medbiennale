
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
          zoom={12}
          onClick={this.onMapClicked}>
       
          <Marker
          onClick={this.onMarkerClick}
          title={'https://goo.gl/maps/AZ4ZkrntV8T2'}
          name={'Name:Michas Hummus - Aldoha 6 Saknin '}
          position={{lat: 32.862890, lng: 35.306119}} />
          <Marker
          onClick={this.onMarkerClick}
          title={'https://goo.gl/maps/gyJPkGZREpT2'}
          name={'Name: Sakhnins college' }
          position={{lat: 32.859779, lng: 35.310624}} />
          <Marker
          onClick={this.onMarkerClick}
          title={'https://goo.gl/maps/RGd5EvABnSt'}
          name={'Name: Madams Hummus - Aldoha 55 '}
          position={{lat: 32.869213456985975, lng: 35.29680810219952}} />
                    
          <Marker
          onClick={this.onMarkerClick}
          title={'https://goo.gl/maps/zBtwhiRY8x32'}
          name={'Name: Yarras resturant'}
          position={{lat: 32.822042, lng: 35.190056}} />
        
          <InfoWindow 
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div >
              {this.state.selectedPlace.name}
              <br/>
              <a target="_blank" href={this.state.selectedPlace.title} class="go">LET'S GO !</a>

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