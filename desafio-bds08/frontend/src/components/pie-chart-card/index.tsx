import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { SalesSummary } from '../../types/sales-summary';
import { formatPrice } from '../../utils/formatters';
import { makeRequest } from '../../utils/request';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0,
};

function PieChartCard({ labels, name, series }: Props) {
  const [summary, setSummary] = useState<SalesSummary>(initialSummary);

  useEffect(() => {
    makeRequest
      .get<SalesSummary>('/sales/summary?storeId=0')
      .then((response) => {
        setSummary(response.data);
      })
      .catch(() => {
        console.error('Error to fatch Summary');
      });
  }, []);

  return (
    <div className="pie-chart-card base-card">
      <h1 className="pie-chart-card-value">{formatPrice(summary.sum)}</h1>
      <span className="pie-chart-card-subtitle">Total de vendas</span>

      <div className="pie-chart-card-apex-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="400"
          height="400"
          series={series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
