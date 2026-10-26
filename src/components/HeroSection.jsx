function HeroSection() {
  const irAlCatalogo = () => {
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <span className="hero-eyebrow">TU PRÓXIMA AVENTURA EMPIEZA AQUÍ</span>
        <h1>Encuentra tu próximo <span>juego favorito</span></h1>
        <p>
          Explora mundos increíbles, descubre juegos para tu plataforma y guarda
          tus favoritos para tenerlos siempre a mano.
        </p>
        <button onClick={irAlCatalogo} className="btn-primary">
          Explorar catálogo <span aria-hidden="true">→</span>
        </button>
        <div className="hero-highlights" aria-label="Características">
          <span>🎮 Juegos seleccionados</span>
          <span>⭐ Favoritos personales</span>
          <span>🕹️ Varias plataformas</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;