import { Provider } from "react-redux";
import { mount } from "enzyme";
import Post from "./Post";
import { store } from "./Store";
import { findBy } from "../../testUtility";

test("Redux", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Post />
    </Provider>
  );

  const title = findBy(wrapper, "post-title");
  console.log(title);
  title.instance().value = "something";

  const comment = findBy(wrapper, "post-comment");
  comment.instance().value = "second";

  const button = findBy(wrapper, "post-button");
  button.simulate("click");

  const newData = findBy(wrapper, "list-something");
  console.log(newData.text());
  expect(newData.text()).toContain("second");
});

test("Redux without rendering", () => {
  const newData = { id: "2", title: "second", comment: "second" };

  const tempStore = store;
  tempStore.dispatch({ type: "UPDATE", payload: newData });
  console.log(tempStore.getState());

  expect(tempStore.getState().length).toBe(3);
});
