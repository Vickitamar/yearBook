import { combineReducers } from "redux";
import booksReducer from "./booksReducer";

const rootReducer = combineReducers({
  booksReducer: booksReducer
});

export default rootReducer;
