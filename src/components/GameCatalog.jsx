import GameCard from "./GameCard";

function GameCatalog({ games, favorites, onToggleFavorite }) {
  return (
    <section id="catalogo" className="section">
      <h2>Catálogo de videojuegos</h2>
      <div className="grid">
        {games.map((game) => {
          const isFavorite = favorites.some((fav) => fav.id === game.id);
          return (
            <GameCard
              key={game.id}
              game={game}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            />
          );
        })}
      </div>
    </section>
  );
}

export default GameCatalog;