import { SortOrder } from '../../enums/sort-order.enum';
import { SearchBy } from '../../enums/search-by.enum';

export interface DataRequestQueryParams {
  sortBy?: string;
  sortOrder?: SortOrder;
  search?: string;
  searchBy?: SearchBy;
  filter?: string;
  offset?: number;
  limit?: number;
}
