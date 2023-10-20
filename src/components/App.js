import '../styles/App.css';
import { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
import flats from '../data/flats.js'
import FlatList from './FlatList.js'
// import Marker from './Marker';
import SimpleMap from './SimpleMap';

function App() {
  const [selectedFlat, selectFlat] = useState(flats[0])

  return (
    <div>
      <FlatList flats={flats} selectFlat={selectFlat} />
      <div className="map-container">
        <SimpleMap selectedFlat={selectedFlat} />
          {/* <GoogleMapReact
          selectedFlat={selectedFlat}
          bootstrapURLKeys={{ key: "AIzaSyAPoWI9l2ZMOqw2OQj6eaEHHjNr2tIL4jo" }}
          defaultCenter={center()}
          defaultZoom={12}>
            <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
          </GoogleMapReact>*/}
        </div>
    </div>
  );
}

export default App;
