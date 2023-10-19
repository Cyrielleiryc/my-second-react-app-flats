import Flat from './Flat.js'

function FlatList({flats, selectFlat}) {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => (
        <Flat flats={flats} flat={flat} index={index} key={index} selectFlat={selectFlat} />
      ))}
    </div>
  );
}

export default FlatList;
