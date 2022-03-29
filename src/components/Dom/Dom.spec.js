import { mount } from "enzyme";
import Dom from "./Dom";

test("props", () => {
  const prop = {
    learn: "CSS",
  };
  const wrapper = mount(<Dom {...prop}></Dom>);
  expect(wrapper.props().learn).toBe("CSS");

  wrapper.setProps({
    learn: "Java",
  });

  expect(wrapper.props().learn).toBe("Java");
});

test("state", () => {
  const prop = {
    learn: "Java",
  };
  const wrapper = mount(<Dom {...prop}></Dom>);
  
  const css = wrapper.find("[data-test='css']");
  css.simulate('click');

  const div = wrapper.find('[data-test="data"]');
  expect(div.text()).toContain('CSS');
});
