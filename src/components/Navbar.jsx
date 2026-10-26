function Navbar({ favoritesCount, theme, onToggleTheme }) {
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
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
          aria-pressed={theme === "light"}
        >
          {theme === "dark" ? "☀️ Modo claro" : "🌙 Modo oscuro"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;