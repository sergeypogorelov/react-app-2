export interface MovieSearchProps {
  search?: string;
  controlLabeledBy?: string[];
  onSearchFormSubmit?: (searchValue: string) => void;
}
