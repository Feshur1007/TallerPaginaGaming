function HeroSection() {
  const irAlCatalogo = () => {
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="hero">
      <h1>Mira los juegos que puedes jugar</h1>
      <p>
        Aqui puedes explorar algunos juegos (6 en total), puedes darle a favoritos y revisar tu seccion para despues jugar en ellos en tu catalogo de stema o xbox
      </p>
      <button onClick={irAlCatalogo} className="btn-primary">
        Explorar catálogo
      </button>
    </section>
  );
}

export default HeroSection;