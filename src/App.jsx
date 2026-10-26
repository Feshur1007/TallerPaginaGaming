import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GameCatalog from "./components/GameCatalog";
import FavoriteSection from "./components/FavoriteSection";
import Footer from "./components/Footer";

import {gamesData} from "./data/gamesData";
import "./App.css";

function loadFavorites() {
  const savedFavorites = localStorage.getItem("game-home-favorites");
  if (!savedFavorites) return [];

  try {
    const favoriteIds = JSON.parse(savedFavorites);
    if (!Array.isArray(favoriteIds)) {
      throw new TypeError("Los favoritos guardados deben ser una lista.");
    }

    return gamesData.filter((game) => favoriteIds.includes(game.id));
  } catch (error) {
    console.error("No se pudieron cargar los favoritos guardados.", error);
    return [];
  }
}

function App() {
  const [favorites, setFavorites] = useState(loadFavorites);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("game-home-theme") === "light" ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("game-home-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(
      "game-home-favorites",
      JSON.stringify(favorites.map((game) => game.id))
    );
  }, [favorites]);

  const handleToggleFavorite = (game) => {
    setFavorites((previous) =>
      previous.some((fav) => fav.id === game.id)
        ? previous.filter((fav) => fav.id !== game.id)
        : [...previous, game]
    );
  };

  return (
    <>
      <Navbar
        favoritesCount={favorites.length}
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")
        }
      />

      <main>
        <HeroSection />

        <GameCatalog
          games={gamesData}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        <FavoriteSection
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;