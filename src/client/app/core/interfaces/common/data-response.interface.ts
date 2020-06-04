export interface DataResponse<T> {
  data: T[];
  total: number;
  offset: number;
  limit: number;
}
