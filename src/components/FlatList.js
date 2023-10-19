import flats from '../data/flats.js'
import Flat from './Flat.js'

function FlatList() {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => (
        <Flat flat={flat} key={index} />
      ))}
    </div>
  );
}

export default FlatList;
