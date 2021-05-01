function Card({card, onCardClick}) {
  
  function handleClick() {
    onCardClick(card);
  }
  
  return (
    <li className="cards__item">
      <img className="cards__image" src={`${card.link}`} alt="" onClick={handleClick} />
      <button type="button" aria-label="Удалить" className="cards__btn-remove"></button>
      <div className="cards__description">
        <h2 className="cards__title text-cut">{card.name}</h2>
        <div className="cards__likes-container">
          <button type="button" aria-label="Нравится" className="cards__btn-like"></button>
          <div className="cards__likes-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
}

export default Card;
