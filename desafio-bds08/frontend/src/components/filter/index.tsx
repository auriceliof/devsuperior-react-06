import './styles.css';

function Filter() {
  return (
    <div className="filter-container base-card">
      <select className="filter-input">
        <option value="">Selecione uma Loja</option>
        <option value="Araguari">Araguari</option>
        <option value="Ituiutaba">Ituiutaba</option>
        <option value="Uberaba">Uberaba</option>
      </select>
    </div>
  );
}

export default Filter;
