import { useState } from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GameCatalog from "./components/GameCatalog";
import FavoriteSection from "./components/FavoriteSection";
import Footer from "./components/Footer";

import {gamesData} from "./data/gamesData";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorite = (game) => {
    setFavorites((previous) =>
      previous.some((fav) => fav.id === game.id)
        ? previous.filter((fav) => fav.id !== game.id)
        : [...previous, game]
    );
  };

  return (
    <>
      <Header />

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