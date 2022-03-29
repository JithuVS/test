
export const reducers = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return [...state, action.payload];
    case "DELETE":
        return action.payload;
    default:
      return state;
  }
};