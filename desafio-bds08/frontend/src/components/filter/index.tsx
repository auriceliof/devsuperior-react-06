import Select from 'react-select';
import { useEffect, useState } from 'react';
import { Stores } from '../../types/all-stores';
import { makeRequest } from '../../utils/request';
import { Controller, useForm } from 'react-hook-form';
import { SalesByGender } from '../../types/sales-by-gender';
import './styles.css';

type FilterData = {
  stores: Stores | null;
  gender: SalesByGender | null;
};

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

function Filter({ onFilterChange }: Props) {
  const [selectStores, setSelectStores] = useState<Stores[]>([]);

  const { handleSubmit, getValues, setValue, control } = useForm<FilterData>();

  const onSubmit = (formData: FilterData) => {
    onFilterChange(formData);
  };

  const handleChangeStores = (value: Stores) => {
    setValue('stores', value);

    const obj: FilterData = {
      stores: getValues('stores'),
      gender: getValues('gender'),
    };
    onFilterChange(obj);
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
        <div className="filter-input">
          <Controller
            name="stores"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectStores}
                classNamePrefix="filter-select"
                placeholder="Selecione uma loja"
                isClearable
                onChange={(value) => handleChangeStores(value as Stores)}
                getOptionLabel={(stores: Stores) => stores.name}
                getOptionValue={(stores: Stores) => String(stores.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
