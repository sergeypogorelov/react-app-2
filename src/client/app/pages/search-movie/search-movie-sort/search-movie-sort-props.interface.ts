import { SortBy } from '../../../core/enums/sort-by.enum';
import { CommonProps } from '../../../core/interfaces/common/common-props.interface';

export interface SearchMovieSortProps extends CommonProps<{}> {
  value: SortBy;
}
