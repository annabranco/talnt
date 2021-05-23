import { ReactElement } from 'react';
import Dropdown from '../../elements/Dropdown';
import { StyledLogo, StyledWrapperElement } from './styles';
import { IAppState } from '../../../types/interfaces';
import { PAppState } from '../../../types/propTypes';

export interface IHeaderProps {
  state: IAppState;
}

const Header = ({
  state: { companies, moves, regions, tags, taxonomies }
}: IHeaderProps): ReactElement => {
  return (
    <StyledWrapperElement color="green">
      <StyledLogo data-test-id="logo">TALNT</StyledLogo>
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </StyledWrapperElement>
  );
};

Header.propTypes = {
  state: PAppState.isRequired
};

export default Header;
