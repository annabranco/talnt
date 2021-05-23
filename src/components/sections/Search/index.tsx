import { ReactElement } from 'react';
import { func } from 'prop-types';
import { StyledElement, StyledWrapperElement } from './styles';

export interface ISearchProps {
  onSearch: (query: string) => void;
}

const Search = ({ onSearch }: ISearchProps): ReactElement => {
  return (
    <StyledWrapperElement color="lightblue">
      <StyledElement> Search working! </StyledElement>
    </StyledWrapperElement>
  );
};

Search.propTypes = {
  onSearch: func.isRequired
};

export default Search;
