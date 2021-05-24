import { expect } from '@jest/globals';
import { mount, ReactWrapper } from 'enzyme';
import Article from '.';
import { defaultArticle } from '../../sections/Main';

const mockLargeArticle = {
  ...defaultArticle,
  name: defaultArticle.name.padEnd(200, '#')
}

describe('< Article >', () => {
  let wrapper: ReactWrapper;
  let wrapperWithLargeText: ReactWrapper;

  beforeAll(() => {
    wrapper = mount(<Article data={defaultArticle} />);
  });

  it('should mount', () => {
    expect(wrapper.find('SArticleWrapper').exists()).toBe(true);
   });

  it('should render a title received by props', () => {
    expect(wrapper.find('SArticleTitle').text()).toBe(defaultArticle.reference);
  });

  it('should render a body text received by props', () => {
    expect(wrapper.find('SArticleText').text()).toBe(defaultArticle.name);
  });

  it('should limit the text length to 100 characters', () => {
    wrapperWithLargeText = mount(<Article data={mockLargeArticle} />);
    expect(wrapperWithLargeText.find('SArticleText').text()).not.toBe(mockLargeArticle.name);
    expect(wrapperWithLargeText.find('SArticleText').text().length).toBe(100);
   });

  it('should display a "read more" button if the length of the body text received by props is bigger than 100 characters', () => {
    wrapperWithLargeText = mount(<Article data={mockLargeArticle} />);
    expect(wrapper.find('SReadMoreButton').exists()).toBe(false);
    expect(wrapperWithLargeText.find('SReadMoreButton').exists()).toBe(true);
  });

  it('should display the full text if "read more" button is clicked', () => {
    wrapperWithLargeText = mount(<Article data={mockLargeArticle} />);
    wrapperWithLargeText.find('SReadMoreButton').simulate('click');
    expect(wrapperWithLargeText.find('SArticleText').text()).toBe(mockLargeArticle.name);
    expect(wrapperWithLargeText.find('SArticleText').text().length).toBeGreaterThan(100);
  });

  it('should hide the "read more" button after being clicked', () => {
    wrapperWithLargeText = mount(<Article data={mockLargeArticle} />);
    wrapperWithLargeText.find('SReadMoreButton').simulate('click');
    expect(wrapperWithLargeText.find('SReadMoreButton').exists()).toBe(false);
  });
});
