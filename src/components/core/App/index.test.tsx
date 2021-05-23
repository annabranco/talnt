import { mount, ReactWrapper } from 'enzyme';
import axios from 'axios';
import { expect } from '@jest/globals';
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
    wrapper.find('SMainArea').simulate('click');
    // // This forced click is being used because useEffect fetch is not being triggered on testing

    expect(axiosSpy).toHaveBeenCalledTimes(5);
    expect(axiosSpy).toHaveBeenCalledWith(REGIONS_ENDPOINT);
    expect(axiosSpy).toHaveBeenCalledWith(COMPANIES_ENDPOINT);
    expect(axiosSpy).toHaveBeenCalledWith(TAGS_ENDPOINT);
    expect(axiosSpy).toHaveBeenCalledWith(MOVES_ENDPOINT);
    expect(axiosSpy).toHaveBeenCalledWith(TAXONOMIES_ENDPOINT);
    axiosSpy.mockRestore();
  });

  it('should not break if AJAX calls fail', () => {
    const response = Promise.reject(new Error('error'));
    const axiosSpy = jest.spyOn(axios, 'get');
    axiosSpy.mockReturnValue(response);

    wrapper.find('SMainArea').simulate('click');
    expect(axiosSpy).toHaveBeenCalledTimes(5);
    expect(axiosSpy).not.toThrow();
    axiosSpy.mockRestore();
  });

  it('should pass onSearch method to Search component', () => {
    let searchProps = wrapper.find('Search').props() as ISearchProps;
    expect(searchProps.onSearch).not.toBe(undefined);
  });

    it('should pass search results to Main component', () => {
    let mainProps = wrapper.find('Main').props() as IMainProps;
    expect(mainProps.searchResults).toStrictEqual([]);
  });
});
