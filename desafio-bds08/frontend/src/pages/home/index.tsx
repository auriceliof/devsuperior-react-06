import Filter from '../../components/filter';
import PieChartCard from '../../components/pie-chart-card';
import { useEffect, useState } from 'react';
import { SalesSummary } from '../../types/sales-summary';
import { makeRequest } from '../../utils/request';
import { PieChartConfig } from '../../types/pie-chart';
import { SalesByGender } from '../../types/sales-by-gender';
import { FilterData } from '../../types/filter';
import { buildSalesByGender } from './helpers';
import './styles.css';

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0,
};

type FilterParams = {
  filterData: FilterData;
};

function Home() {
  const [filterData, setFilterData] = useState<FilterData>();

  const [summary, setSummary] = useState<SalesSummary>(initialSummary);

  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const [filterParams, setFilterParams] = useState<FilterParams>({
    filterData: { stores: null, gender: null },
  });

  const handleSubmitFilter = (filter: FilterData) => {
    setFilterParams({ filterData: filter });
    setFilterData(filterData);
  };

  useEffect(() => {
    if (filterParams.filterData.stores !== null) {
      makeRequest
        .get(`/sales/summary?storeId=${filterParams.filterData.stores?.id}`)
        .then((response) => {
          setSummary(response.data);
          console.log(response.data);
        })
        .catch(() => {
          console.error('Error to fatch Home');
        });
    } else {
      makeRequest
        .get('/sales/summary?storeId=0')
        .then((response) => {
          setSummary(response.data);
          console.log(response.data);
        })
        .catch(() => {
          console.error('Error to fatch Home');
        });
    }
  }, [filterParams]);

  useEffect(() => {
    if (filterParams.filterData.stores !== null) {
      makeRequest
        .get<SalesByGender[]>(`/sales/by-gender?storeId=${filterParams.filterData.stores?.id}`)
        .then((response) => {
          const newSalesByGender = buildSalesByGender(response.data);
          setSalesByGender(newSalesByGender);
          console.log(newSalesByGender);
        })
        .catch(() => {
          console.error('Error to fatch sales by Gender');
        });
    } else {
      makeRequest
        .get<SalesByGender[]>('/sales/by-gender?storeId=0')
        .then((response) => {
          const newSalesByGender = buildSalesByGender(response.data);
          setSalesByGender(newSalesByGender);
          console.log(newSalesByGender);
        })
        .catch(() => {
          console.error('Error to fatch sales by Gender');
        });
    }
  }, [filterParams]);

  return (
    <div className="home-container">
      <Filter onFilterChange={handleSubmitFilter} />
      <div className="home-piechartcard-container">
        <PieChartCard
          name=""
          labels={salesByGender?.labels}
          series={salesByGender?.series}
          summary={summary.sum}
        />
      </div>
    </div>
  );
}

export default Home;
