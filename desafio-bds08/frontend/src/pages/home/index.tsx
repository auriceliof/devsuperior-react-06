import Filter, { FilterData } from '../../components/filter';
import PieChartCard from '../../components/pie-chart-card';
import { useEffect, useState } from 'react';
import { SalesSummary } from '../../types/sales-summary';
import { makeRequest } from '../../utils/request';
import './styles.css';

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0,
};

type StoreId = {
  filterData: FilterData;
};

function Home() {
  const [summary, setSummary] = useState<SalesSummary>(initialSummary);

  const [StoreId, setStoreId] = useState<StoreId>({
    filterData: { stores: null },
  });

  const handleSubmitFilter = (filter: FilterData) => {
    setStoreId({ filterData: filter });
  };

  useEffect(() => {
    if (StoreId.filterData.stores !== null) {
      makeRequest
        .get(`/sales/summary?storeId=${StoreId.filterData.stores?.id}`)
        .then((response) => {
          setSummary(response.data);
        });
    } else {
      makeRequest.get('/sales/summary?storeId=0').then((response) => {
        setSummary(response.data);
      });
    }
  }, [StoreId]);

  return (
    <div className="home-container">
      <Filter onFilterChange={handleSubmitFilter} />
      <div className="home-piechartcard-container">
        <PieChartCard
          name="  "
          labels={['Feminino', 'Masculino', 'Outro']}
          series={[20, 50, 30]}
          summary={summary.sum}
        />
      </div>
    </div>
  );
}

export default Home;
