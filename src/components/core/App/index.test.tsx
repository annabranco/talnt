import { expect } from '@jest/globals';
import { mount, ReactWrapper } from 'enzyme';
import axios from 'axios';
import App, { initialState } from '.';
import {
  REGIONS_ENDPOINT,
  COMPANIES_ENDPOINT,
  TAGS_ENDPOINT,
  MOVES_ENDPOINT,
  TAXONOMIES_ENDPOINT
} from '../../../api/endpoints';
import { MockedRegionsData } from '../../../tests/mocks';
import { ISearchProps } from '../../sections/Search';
import { IHeaderProps } from './../../sections/Header';
import { IMainProps } from './../../sections/Main';

describe('< App >', () => {
  let wrapper: ReactWrapper;
  jest.mock('axios');

  beforeAll(() => {
    wrapper = mount(<App />);
  });

  beforeEach(() => {
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a Header child component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('should have a Main child component', () => {
    expect(wrapper.find('Main').exists()).toBe(true);
  });

  it('should have a Search child component', () => {
    expect(wrapper.find('Search').exists()).toBe(true);
  });

  it('should pass state value to Header component by props', () => {
    let headerProps = wrapper.find('Header').props() as IHeaderProps;
    expect(headerProps.state).toBe(initialState);
  });

  it('should make AJAX calls to get server data', () => {
    const response = Promise.resolve({ data: MockedRegionsData });
    const axiosSpy = jest.spyOn(axios, 'get');
    axiosSpy.mockReturnValue(response);

    // TOFIX [23-May-21]: Dump this click event (Anna Branco)
    wrapper.find('FakeElement').simulate('click');
    // // This forced click is being used because useEffect fetch is not being triggered on testing

    expect(axiosSpy).toHaveBeenCalledTimes(3);
    expect(axiosSpy).toHaveBeenCalledWith(REGIONS_ENDPOINT);
    expect(axiosSpy).toHaveBeenCalledWith(COMPANIES_ENDPOINT);
    expect(axiosSpy).toHaveBeenCalledWith(MOVES_ENDPOINT);
    axiosSpy.mockRestore();
  });

  it('should not break if AJAX calls fail', () => {
    const response = Promise.reject(new Error('error'));
    const axiosSpy = jest.spyOn(axios, 'get');
    axiosSpy.mockReturnValue(response);

    wrapper.find('FakeElement').simulate('click');
    expect(axiosSpy).toHaveBeenCalledTimes(3);
    expect(axiosSpy).not.toThrow();
    axiosSpy.mockRestore();
  });

  it('should pass onSearch  and updateSearchString methods and the current search string to Search component', () => {
    let searchProps = wrapper.find('Search').props() as ISearchProps;
    expect(searchProps.onSearch).not.toBe(undefined);
    expect(searchProps.searchString).toStrictEqual('');
  });

  it('should pass search results and search string to Main component', () => {
    let mainProps = wrapper.find('Main').props() as IMainProps;
      expect(mainProps.searchResults).toStrictEqual([]);
      expect(mainProps.searchString).toStrictEqual('');
  });
});
