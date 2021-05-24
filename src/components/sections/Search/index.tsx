import { ReactElement } from 'react';
import { func, string } from 'prop-types';
import { SElement, SWrapperElement } from './styles';

export interface ISearchProps {
  onSearch: (query: string) => void;
  searchString: string;
  updateSearchString: (query: string) => void;
}

const Search = ({
  onSearch,
  searchString,
  updateSearchString
}: ISearchProps): ReactElement => {
  return (
    <SWrapperElement color="lightblue">
      <SElement> Search working! </SElement>
    </SWrapperElement>
  );
};

Search.propTypes = {
  onSearch: func.isRequired,
  searchString: string.isRequired,
  updateSearchString: func.isRequired
};

export default Search;
