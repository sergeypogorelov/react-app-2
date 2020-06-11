export interface MovieSearchProps {
  search?: string;
  controlLabeledBy?: string[];
  onSearchFormSubmit?: (searchValue: string) => void;
  onSearchValueChange?: (searchValue: string) => void;
}
