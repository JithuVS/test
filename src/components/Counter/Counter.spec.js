import { mount } from "enzyme";
import Counter from "./Counter";
import {findBy} from '../../testUtility';

test("simulate", () => {
  const wrapper = mount(<Counter/>);
  const increment = findBy(wrapper,'increment');

  increment.simulate('click');
  increment.simulate('click');
  increment.simulate('click');
  increment.simulate('click');

  const count = findBy(wrapper, 'count');
  // console.log(count.text());
  expect(count.text()).toBe('4');


  const decrement = findBy(wrapper,'decrement');
  decrement.simulate('click');
  // console.log(count.text());

  expect(count.text()).toBe('3');

});
