import { LabeledValue } from '../../../core/interfaces/common/labeled-value.interface';

export interface SwitchProps {
  left: LabeledValue;
  right: LabeledValue;
  currentValue: string;
  onChange: (newValue: string) => void;
}
