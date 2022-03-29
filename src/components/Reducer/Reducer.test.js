import { reducers } from "./PostReducer";

const initialState = [{ id: "1", title: "first", comment: "comment" }];

test("reducers", () => {
  const newData = { id: "2", title: "second", comment: "second" };

  const action = { type: "UPDATE", payload: newData };
  const reduce = reducers(initialState, action);

  // console.log(reduce);
  expect(reduce).toEqual([...initialState, newData]);

  const action1 = { type: "UPPDATE", payload: newData };
  const reduce1 = reducers(initialState, action1);
  console.log(reduce1);
  expect(reduce1).toEqual(initialState);
});
