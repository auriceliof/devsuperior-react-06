import axios from 'axios';
import { FilterData } from '../types/filter';

export const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({ baseURL });

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    stores: filterData?.stores,
    gender: filterData?.gender,
    ...extraParams,
  };
};
