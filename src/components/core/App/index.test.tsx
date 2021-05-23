import { shallow, ShallowWrapper } from 'enzyme';
import App from '.';

describe('< App >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });

  xit('should have a Header child component', () => {});
  xit('should have a Main child component', () => {});
  xit('should have a Search child component', () => {});
  xit('should make AJAX calls to get server data on mounting', () => {});
  xit('should pass AJAX calls results to Header component by props', () => {});
  xit('should not break if AJAX calls fail', () => {});
  xit('should make an AJAX call with a query search when method onSearch is triggered', () => {});
  xit('should handle the data received and pass the results to the Main component by props', () => {});
  xit('should handle errors and not break if onSearch method fails', () => {});
});
