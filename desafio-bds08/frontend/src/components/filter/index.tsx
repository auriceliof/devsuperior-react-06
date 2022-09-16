import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Stores } from '../../types/all-stores';
import { makeRequest } from '../../utils/request';
import './styles.css';

function Filter() {
  const [selectStores, setSelectStores] = useState<Stores[]>([]);

  useEffect(() => {
    makeRequest
      .get<Stores[]>('/stores')
      .then((response) => {
        setSelectStores(response.data);
      })
      .catch(() => {
        console.error('Error to fatch Summary');
      });
  }, []);

  return (
    <div className="filter-container base-card">
      <form action="" className="filter-form">
        <div className="filter-input">
          <Select
            options={selectStores}
            classNamePrefix="filter-select"
            placeholder="Selecione um loja"
            isClearable
            getOptionLabel={(stores: Stores) => stores.name}
            getOptionValue={(stores: Stores) => String(stores.id)}
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
