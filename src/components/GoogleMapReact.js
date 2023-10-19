function GoogleMapReact({selectedFlatGPS}) {
  return (
    <div className="map-container">
      LAT = {selectedFlatGPS.lat} / LNG = {selectedFlatGPS.lng}
    </div>
  );
}

export default GoogleMapReact;
