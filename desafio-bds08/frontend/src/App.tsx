import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <div className="app-piechartcard-container">
          <PieChartCard
            name=""
            labels={['Araguari', 'Ituiutaba', 'Uberaba']}
            series={[20, 50, 30]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
