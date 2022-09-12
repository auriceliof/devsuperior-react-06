import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function PieChartCard({ labels, name, series }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <h1 className="pie-chart-card-value">R$ 746.484,00</h1>
      <span className="pie-chart-card-subtitle">Total de vendas</span>

      <div className="pie-chart-card-apex-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="300"
          height="300"
          series={series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
