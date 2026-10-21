function Header({ favoritesCount }) {
  return (
    <header className="header">
      <div className="logo">
        <span>🎮 Game Home</span>
      </div>
      <nav className="nav">
        <a href="#inicio">Inicio</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#favoritos" className="fav-link">
          Favoritos <span className="badge">{favoritesCount}</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;