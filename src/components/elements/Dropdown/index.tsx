import { ReactElement } from 'react';
import { string } from 'prop-types';
import { StyledElement, StyledWrapperElement } from './styles';

interface Props {
  size: string;
}

const Dropdown = ({ size }: Props): ReactElement => {
  return (
    <StyledWrapperElement color="yellow">
      <StyledElement> Dropdown working! </StyledElement>
    </StyledWrapperElement>
  );
};

Dropdown.propTypes = {
  size: string
};

Dropdown.defaultProps = {
  size: undefined
};

export default Dropdown;
