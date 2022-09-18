import PieChartCard from '../../components/pie-chart-card';
import './styles.css';

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-piechartcard-container">
          <PieChartCard
            name="  "
            labels={['Feminino', 'Masculino', 'Outro']}
            series={[20, 50, 30]}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
