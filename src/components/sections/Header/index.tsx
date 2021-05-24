import { ReactElement } from 'react';
import Dropdown from '../../elements/Dropdown';
import { SLogo, SWrapperElement } from './styles';
import { IAppState } from '../../../types/interfaces';
import { PAppState } from '../../../types/propTypes';
import { COMPANIES, MOVES, REGIONS } from '../../../constants';

export interface IHeaderProps {
  state: IAppState;
}

const Header = ({
  state: { companies, moves, regions }
}: IHeaderProps): ReactElement => {
  return (
    <SWrapperElement color="green">
      <SLogo data-test-id="logo">TALNT</SLogo>
      <Dropdown data={regions} type={REGIONS} />
      <Dropdown data={companies} type={COMPANIES} />
      <Dropdown data={moves} type={MOVES} />
    </SWrapperElement>
  );
};

Header.propTypes = {
  state: PAppState.isRequired
};

export default Header;
