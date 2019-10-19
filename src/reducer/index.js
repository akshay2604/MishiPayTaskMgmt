import { combineReducers } from "redux";
import {todo} from './todo';

export const RootReducer = combineReducers({
  todos: todo
});
