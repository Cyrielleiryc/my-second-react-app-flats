import '../styles/App.css';
import { useState } from 'react';
import FlatList from './FlatList.js'
import GoogleMapReact from './GoogleMapReact.js'

function App() {
  const [selectedFlatGPS, setSelectedFlatGPS] = useState({lat: "", lng: ""})
  return (
    <div>
      <FlatList setSelectedFlatGPS={setSelectedFlatGPS} />
      <GoogleMapReact selectedFlatGPS={selectedFlatGPS} />
    </div>
  );
}

export default App;
