import { combineReducers } from "redux";
import todos from "./todos";

const reducers = {
  todoStore: todos,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
