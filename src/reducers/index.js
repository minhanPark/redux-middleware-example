import numberReducers from "./number";
import postReducers from "./post";
import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  numberReducers,
  postReducers
});

const logger = createLogger();

const reduxMiddleware = [logger, ReduxThunk];

const store = createStore(rootReducer, applyMiddleware(...reduxMiddleware));

export default store;
