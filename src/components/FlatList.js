import flats from '../data/flats.js'
import Flat from './Flat.js'

function FlatList({setSelectedFlatGPS}) {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => (
        <Flat flat={flat} key={index} setSelectedFlatGPS={setSelectedFlatGPS} />
      ))}
    </div>
  );
}

export default FlatList;
