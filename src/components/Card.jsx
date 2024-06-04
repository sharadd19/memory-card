export default function Card({ card, handleCardClick }) {
  return (
    <div
      key={card.id}
      className="card"
      onClick={() => handleCardClick(card.id)}
      id={card.id}
    >
      <img src={card.photoUrl} alt="" />
      {card.name}
    </div>
  );
}
