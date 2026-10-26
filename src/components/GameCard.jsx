function GameCard({ game, isFavorite, onToggleFavorite }) {
  return (
    <article className="card">
      <img src={game.image} alt={game.name} className="card-img" />
      <div className="card-body">
        <span className="tag">{game.genre}</span>
        <h3>{game.name}</h3>
        <p className="platform"><strong>Plataformas:</strong> {game.platform}</p>
        <p className="description">{game.description}</p>
        <button
          onClick={() => onToggleFavorite(game)}
          className={isFavorite ? "btn-fav active" : "btn-fav"}
        >
          {isFavorite ? "★ Quitar de favoritos" : "☆ Agregar a favoritos"}
        </button>
      </div>
    </article>
  );
}

export default GameCard;