function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h3>🎮 Game Home</h3>
      <p>Tu plataforma para descubrir videojuegos y organizar tu colección de favoritos.</p>
      <div className="footer-links">
        <a href="#inicio">Inicio</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#favoritos">Favoritos</a>
      </div>
      <p className="copyright">© {year} Game Home. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;