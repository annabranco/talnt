import { ReactElement } from 'react';
import { string } from 'prop-types';
import { StyledElement, StyledWrapperElement } from './styles';

interface Props {
  text: string;
}

const Search = ({ text }: Props): ReactElement => {
  return (
    <StyledWrapperElement color="lightblue">
      <StyledElement> Search working! </StyledElement>
    </StyledWrapperElement>
  );
};

Search.propTypes = {
  text: string
};

Search.defaultProps = {
  text: undefined
};

export default Search;
