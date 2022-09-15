import Select from 'react-select';
import './styles.css';

function Filter() {
  const options = [
    { value: 'Araguari', label: 'Araguari' },
    { value: 'Ituiutaba', label: 'Ituiutaba' },
    { value: 'Uberlândia', label: 'Uberlândia' },
  ];

  return (
    <div className="filter-container base-card">
      <form action="" className="filter-form">
        <div className="filter-input">
          <Select options={options} />
        </div>
      </form>
    </div>
  );
}

export default Filter;
