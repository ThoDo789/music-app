import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import dataReducer from "./reducers/dataReducer";
import playListReducer from "./reducers/playListReducer";

const rootReducer = combineReducers({
  data: dataReducer,
  playList: playListReducer
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, composedEnhancer);

export default store;
