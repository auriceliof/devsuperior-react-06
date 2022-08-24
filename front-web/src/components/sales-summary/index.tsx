import './styles.css';
import SalesSummaryCard from './sales-summary-card';

function SalesSummary() {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard />
      <SalesSummaryCard />
      <SalesSummaryCard />
      <SalesSummaryCard />
    </div>
  );
}

export default SalesSummary;
