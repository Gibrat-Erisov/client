import { applyMiddleware, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import charts from "./charts";
import authData from "./authData";
import folders from "./folders";
import networks from "./networks";
import movies from "./store-movies";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunkMiddleware];
const composeEnhancers = composeWithDevTools({
  thunkMiddleware
});

let reducers = combineReducers({
  charts,
  authData,
  folders,
  networks,
  movies
});

const saveState = state => {
  try {
    sessionStorage.setItem("app_state", JSON.stringify(state));
  } catch (err) {}
};

const loadState = () => {
  try {
    const serialisedState = sessionStorage.getItem("app_state");

    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

const oldState = loadState();
const store = createStore(
  reducers,
  oldState,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() => {
  saveState({ authData: store.getState().authData });
});

export default store;
