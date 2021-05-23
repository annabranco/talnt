import { oneOfType } from 'prop-types';
import { ReactElement } from 'react';
import { IApiData } from '../../../types/interfaces';
import { PApiData, PGenericData } from '../../../types/propTypes';
import { StyledElement, StyledWrapperElement } from './styles';

interface Props {
  data: IApiData;
}

const Dropdown = ({ data }: Props): ReactElement => {
  return (
    <StyledWrapperElement color="yellow">
      <StyledElement> Dropdown working! </StyledElement>
    </StyledWrapperElement>
  );
};

Dropdown.propTypes = {
  data: PApiData.isRequired
};

export default Dropdown;
