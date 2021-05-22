import { shallow, ShallowWrapper } from 'enzyme';
import App from '.';

describe('< App >', () => {
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    wrapper = shallow(
      <App  />
    );
  });

  it('should mount', () => {
    expect(wrapper).toBeDefined();
  });
});
