import { expect } from '@jest/globals';
import { mount, ReactWrapper } from 'enzyme';
import Search from '.';
import { MIN_CHARS, SEARCH, SEARCH_HERE } from '../../../constants';

describe('< Search >', () => {
  let wrapper: ReactWrapper;
  const onSearchMock = jest.fn();

  beforeAll(() => {
    wrapper = mount(<Search onSearch={onSearchMock}  searchString='' />);
  });

  it('should mount', () => {
    expect(wrapper.find('SSearchWrapper').exists()).toBe(true);
  });

  it('should have a search title', () => {
    expect(wrapper.find('SSearchTitle').text()).toBe(SEARCH);
  });

  it('Should display a search input with a placeholder and no initial value', () => {
    expect(wrapper.find('SSearchInput').props()['placeholder']).toBe(SEARCH_HERE);
    expect(wrapper.find('SSearchInput').props()['value']).toBe(undefined);
  });

  it('should display label when input receives focus and hide it on blur if there is no search text', () => {
    expect(wrapper.find('SSearchLabel').exists()).toBe(false);
    wrapper.find('SSearchInput').simulate('focus')
    expect(wrapper.find('SSearchLabel').exists()).toBe(true);
    wrapper.find('SSearchInput').simulate('blur')
    expect(wrapper.find('SSearchLabel').exists()).toBe(false);
  });

  it('should display label when input has text, and a different label when input has text but less than 2 characters', () => {
    wrapper = mount(<Search onSearch={onSearchMock} searchString='A' />);
    expect(wrapper.find('SSearchLabel').text()).toBe(MIN_CHARS);
    wrapper = mount(<Search onSearch={onSearchMock} searchString='Anna' />);
    expect(wrapper.find('SSearchLabel').text()).toBe(SEARCH_HERE);
  });

  it('should call updateSearchString every time the input text changes, with 0.5 seconds of debounce', () => {
    wrapper.find('SSearchInput').simulate("change", { target: { value: "A" } });
    wrapper.find('SSearchInput').simulate("change", { target: { value: "An" } });
    wrapper.find('SSearchInput').simulate("change", { target: { value: "Ann" } });
    wrapper.find('SSearchInput').simulate("change", { target: { value: "Anna" } });
    setTimeout(() => {
      expect(onSearchMock.mock.calls.length).toBe(1);
     }, 510);
  });
});
