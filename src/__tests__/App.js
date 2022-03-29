// import { render, screen } from '@testing-library/react';
import Enzyme, { mount, shallow, render} from 'enzyme';
import App from '../App';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import jsonTo from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const wrapper = mount(<App />);
  // console.log(wrapper.debug());

  const  dom = wrapper.find('.margin');
  expect(dom.text()).toBe('Learn');
});

test('renders counter', () => {
  const wrapper = mount(<App />);
  // console.log(wrapper.debug());

  const  dom = wrapper.find('[data-test="counter"]');
  expect(dom.text()).toBe('Counter/Simulate');
});


test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
});



it.skip('snapshot',()=>{
  const wrapper = mount(<App/>);
  expect(jsonTo(wrapper)).toMatchSnapshot();
})


