import { expect } from '@jest/globals';
import { mount, ReactWrapper } from 'enzyme';
import Header, { IHeaderProps } from '.';
import { MockedRegionsData, MockedServerData, MockedServerDataAlt } from '../../../tests/mocks';

const mockState = {
  companies: MockedServerData.success,
  moves: MockedServerDataAlt.success,
  regions: MockedRegionsData.success
};

describe('< Header >', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<Header state={mockState} />);
  });

  it('should mount', () => {
    expect(wrapper.find('StyledLogo').text()).toBe('TALNT');

  });

  it('should have three Dropdown components', () => {
    expect(wrapper.find('Dropdown').length).toBe(3);
  });

  it('should pass regions received by props to the second Dropdown component', () => {
    const { regions } = (wrapper.props() as IHeaderProps).state;
    expect(wrapper.find('Dropdown').first().props().data).toEqual(regions);
  });

  it('should pass companies received by props to the first Dropdown component', () => {
    const { companies } = (wrapper.props() as IHeaderProps).state;
    expect(wrapper.find('Dropdown').at(1).props().data).toEqual(companies);
  });

  it('should pass moves received by props to the third Dropdown component', () => {
    const { moves } = (wrapper.props() as IHeaderProps).state;
    expect(wrapper.find('Dropdown').at(2).props().data).toEqual(moves);
  });
});
