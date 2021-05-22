import { ReactElement } from 'react';
import { string } from 'prop-types';
import Dropdown from '../../elements/Dropdown';
import { StyledElement, StyledWrapperElement } from './styles';

interface Props {
  text: string;
}

const Header = ({ text }: Props): ReactElement => {
  return (
    <StyledWrapperElement color="green">
      <StyledElement> Header working! </StyledElement>
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </StyledWrapperElement>
  );
};

Header.propTypes = {
  text: string
};

Header.defaultProps = {
  text: undefined
};

export default Header;
