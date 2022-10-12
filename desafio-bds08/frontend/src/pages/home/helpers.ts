import { SalesByGender } from '../../types/sales-by-gender';

export const buildSalesByGender = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series,
  };
};
