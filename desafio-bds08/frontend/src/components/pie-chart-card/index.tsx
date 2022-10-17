import { formatPrice } from '../../utils/formatters';
import { buildPieChartConfig } from './helpers';
import ReactApexChart from 'react-apexcharts';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  summary: number;
};

function PieChartCard({ labels = [], name, series = [], summary }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <div className="pie-chart-card-content">
        <h1 className="pie-chart-card-value">{formatPrice(summary)}</h1>
        <span className="pie-chart-card-subtitle">Total de vendas</span>
      </div>

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
