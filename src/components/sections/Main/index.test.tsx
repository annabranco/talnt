import { expect } from '@jest/globals';
import { mount, ReactWrapper } from 'enzyme';
import Main, { articleNotFound, defaultArticle } from '.';
import { MockedServerDataAlt } from '../../../tests/mocks';

describe('< Main >', () => {
  let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<Main searchResults={[]} searchString='' />);
  });

  it('should mount', () => {
    expect(wrapper.find('Article').exists()).toBe(true);
  });

  it('should initially render an Article component passing welcome message as props', () => {
    expect(wrapper.find('Article').length).toBe(1);
    expect(wrapper.find('Article').props()["data"]).toBe(defaultArticle);
   });

  it('should render as many articles as received by props', () => {
    wrapper = mount(<Main searchResults={MockedServerDataAlt.success} searchString='' />);
    expect(wrapper.find('Article').length).toBe(MockedServerDataAlt.success.length);
  });

    it('should render a sorry message if no articles are received and a search string is set', () => {
    wrapper = mount(<Main searchResults={[]} searchString='x' />);
      expect(wrapper.find('Article').length).toBe(1);
      expect(wrapper.find('Article').props()["data"]).toBe(articleNotFound);
  });
});
