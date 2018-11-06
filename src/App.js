import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './components/MapContainer.js';

class App extends Component {
  state = {
		locations: [],
		locationsToUse: [],
		locationsNotFound: false,
		newCenter: { lat: 20, lng: 85 },
		zoom: 10,
		isOpen: false,
		selectedLocation: {},
		query: ''

	}

  render() {
    console.log(this.state.newCenter+this.state.zoom)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Restaurants in Bhubaneswar</h1>


        </header>
        <MapContainer
        newCenter={this.state.newCenter}
        zoom={this.state.zoom}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDgUWR_b8wrF5e1jOTwQnQ5wrtuwPdZDd0&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />} />}
         isMarkerShown={false}/>
      </div>
    );
  }
}

export default App;
