import { Fragment, ReactElement } from 'react';
import { oneOf } from 'prop-types';
import { IApiData, IGenericData, IRegions } from '../../../types/interfaces';
import { PApiData } from '../../../types/propTypes';
import { StyledDropdown, StyledOption, StyledWrapperElement } from './styles';
import { REGIONS, COMPANIES, MOVES } from '../../../constants/index';

export interface IDropdownProps {
  data: IApiData;
  type: string;
}

const Dropdown = ({ data, type }: IDropdownProps): ReactElement => {
  return (
    <StyledWrapperElement color="yellow">
      <StyledDropdown defaultValue={type} disabled={data.length === 0}>
        <StyledOption disabled key={`defaultOption${type}`} value={type}>
          {type}
        </StyledOption>
        {data.map((item: IGenericData | IRegions) => (
          <Fragment key={JSON.stringify(item)}>
            {type === REGIONS ? (
              <StyledOption value={(item as IRegions).acronym}>
                {(item as IRegions).description}
              </StyledOption>
            ) : (
              <StyledOption value={(item as IGenericData).reference}>
                {(item as IGenericData).name}
              </StyledOption>
            )}
          </Fragment>
        ))}
      </StyledDropdown>
    </StyledWrapperElement>
  );
};

Dropdown.propTypes = {
  data: PApiData.isRequired,
  type: oneOf([REGIONS, COMPANIES, MOVES]).isRequired
};

export default Dropdown;
