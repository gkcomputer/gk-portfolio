import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { sidenav_reducer } from "../reducers/Headsidenav.reducer";

const rootReducer = combineReducers({
  sidebar: sidenav_reducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
