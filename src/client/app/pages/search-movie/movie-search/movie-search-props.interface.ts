import { CommonProps } from '../../../core/interfaces/common/common-props.interface';

export interface MovieSearchProps extends CommonProps<{}> {
  search?: string;
  controlLabeledBy?: string[];
}
