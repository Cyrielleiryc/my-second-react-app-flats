import '../styles/Cards.css'

function Flat({flat, setSelectedFlatGPS}) {
  const removeActiveClass = () => {
    const allCards = document.querySelectorAll('.card')
    allCards.forEach((card) => {
      card.classList.remove('active')
    })
  }
  const handleClick = (event) => {
    setSelectedFlatGPS({lat: flat.lat, lng: flat.lng})
    removeActiveClass()
    event.target.classList.add('active')
  }

  return (
    <div className="card" style= {{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`
    }}
      onClick={handleClick}
    >
      <div className="card-category">{flat.price} {flat.priceCurrency}</div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      {/* <a className="card-link" href="#"></a> */}
    </div>
  );
}

export default Flat;
