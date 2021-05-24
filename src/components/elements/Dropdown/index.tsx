import { Fragment, ReactElement } from 'react';
import { oneOf } from 'prop-types';
import { IApiData, IGenericData, IRegions } from '../../../types/interfaces';
import { PApiData } from '../../../types/propTypes';
import { SDropdown, SOption, SWrapperElement } from './styles';
import { REGIONS, COMPANIES, MOVES } from '../../../constants/index';

export interface IDropdownProps {
  data: IApiData;
  type: string;
}

const Dropdown = ({ data, type }: IDropdownProps): ReactElement => {
  return (
    <SWrapperElement color="yellow">
      <SDropdown defaultValue={type} disabled={data.length === 0}>
        <SOption disabled key={`defaultOption${type}`} value={type}>
          {type}
        </SOption>
        {data.map((item: IGenericData | IRegions) => (
          <Fragment key={JSON.stringify(item)}>
            {type === REGIONS ? (
              <SOption value={(item as IRegions).acronym}>
                {(item as IRegions).description}
              </SOption>
            ) : (
              <SOption value={(item as IGenericData).reference}>
                {(item as IGenericData).name}
              </SOption>
            )}
          </Fragment>
        ))}
      </SDropdown>
    </SWrapperElement>
  );
};

Dropdown.propTypes = {
  data: PApiData.isRequired,
  type: oneOf([REGIONS, COMPANIES, MOVES]).isRequired
};

export default Dropdown;
