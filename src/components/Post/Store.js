import { createStore } from "redux";
import { reducers } from "./PostReducer";


const initialState = [{ id: "1", title: "first", comment: "comment" }];


export const store = createStore(reducers, initialState);
