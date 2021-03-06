import { expect } from '@jest/globals';
import { shallow, ShallowWrapper } from 'enzyme';
import Dropdown from '.';
import { REGIONS } from '../../../constants';
import { MockedRegionsData } from '../../../tests/mocks';
import { IDropdownProps } from './index';

describe('< Dropdown >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<Dropdown data={MockedRegionsData.success} type={REGIONS} />);
  });

  it('should mount', () => {
    expect(wrapper.find('SDropdown').exists()).toBe(true);
   });

  it('should display an initial selected disabled option received by props', () => {
    const { type } = (wrapper.props() as IDropdownProps);
    expect(wrapper.find('SDropdown').props().value).toBe(type);
    expect(wrapper.find('SOption').first().props()["disabled"]).toBe(true);
   });

    it('should display all subitems received from server plus the default disabled option', () => {
    expect(wrapper.find('SDropdown').children().length).toBe(MockedRegionsData.success.length + 1);
    });

  it('should have no subitems and be disabled when data is empty', () => {
    wrapper = shallow(<Dropdown data={[]} type={REGIONS} />);
    expect(wrapper.find('SDropdown').children().length).toBe(1);
    expect(wrapper.find('SDropdown').first().props()["disabled"]).toBe(true);
  });
});
