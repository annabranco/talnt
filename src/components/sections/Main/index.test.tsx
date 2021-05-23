import { expect } from '@jest/globals';
import { mount, ReactWrapper } from 'enzyme';
import Main, { defaultArticle } from '.';
import { MockedServerDataAlt } from '../../../tests/mocks';

describe('< Main >', () => {
    let wrapper: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<Main searchResults={[]} />);
  });

  it('should mount', () => {
    expect(wrapper.find('Article').exists()).toBe(true);
  });

  it('should initially render an Article component passing welcome message as props', () => {
    expect(wrapper.find('Article').length).toBe(1);
    expect(wrapper.find('Article').props()["data"]).toBe(defaultArticle);
   });

  it('should render as many articles as received by props', () => {
    wrapper = mount(<Main searchResults={MockedServerDataAlt.success} />);
    expect(wrapper.find('Article').length).toBe(MockedServerDataAlt.success.length);
  });
});
