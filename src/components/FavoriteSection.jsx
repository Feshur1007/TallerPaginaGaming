import { useState } from "react";
import Filters from "./Filters";
import GameCard from "./GameCard";

function FavoritesSection({ favorites, onToggleFavorite }) {
  const [genre, setGenre] = useState("Todos");
  const [platform, setPlatform] = useState("Todas");

  const filteredFavorites = favorites.filter((game) => {
    const matchGenre = genre === "Todos" || game.genre === genre;
    const matchPlatform = platform === "Todas" || game.platform.includes(platform);
    return matchGenre && matchPlatform;
  });

  const handleReset = () => {
    setGenre("Todos");
    setPlatform("Todas");
  };

  return (
    <section id="favoritos" className="section favorites-bg">
      <div className="fav-header">
        <h2>Mis favoritos</h2>
        <p className="counter">Total guardados: <strong>{favorites.length}</strong></p>
      </div>

      <Filters
        genre={genre}
        platform={platform}
        setGenre={setGenre}
        setPlatform={setPlatform}
        onReset={handleReset}
      />

      {favorites.length === 0 ? (
        <p className="empty-msg">No tienes videojuegos en tu lista de favoritos todavía.</p>
      ) : filteredFavorites.length === 0 ? (
        <p className="empty-msg">Ningún videojuego favorito coincide con los filtros seleccionados.</p>
      ) : (
        <div className="grid">
          {filteredFavorites.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoritesSection;