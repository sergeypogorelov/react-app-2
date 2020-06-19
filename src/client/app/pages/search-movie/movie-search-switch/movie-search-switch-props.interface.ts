import { SearchBy } from '../../../core/enums/search-by.enum';
import { CommonProps } from '../../../core/interfaces/common/common-props.interface';

export interface MovieSearchSwitchProps extends CommonProps<{}> {
  value: SearchBy;
}
