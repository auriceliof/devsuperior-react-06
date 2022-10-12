import { Stores } from './all-stores';
import { SalesByGender } from './sales-by-gender';

export type FilterData = {
  stores?: Stores | null;
  gender?: SalesByGender | null;
};
