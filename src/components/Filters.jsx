function Filters({ genre, platform, setGenre, setPlatform, onReset }) {
  return (
    <div className="filters">
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="Todos">Todos los géneros</option>
        <option value="Acción">Acción</option>
        <option value="RPG">RPG</option>
        <option value="Aventura">Aventura</option>
        <option value="Carreras">Carreras</option>
        <option value="Estrategia">Estrategia</option>
      </select>

      <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
        <option value="Todas">Todas las plataformas</option>
        <option value="PC">PC</option>
        <option value="PS5">PS5</option>
        <option value="Xbox">Xbox</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
      </select>

      <button onClick={onReset} className="btn-reset">
        Restablecer filtros
      </button>
    </div>
  );
}

export default Filters;