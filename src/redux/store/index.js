import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from 'redux-thunk';
import reducers from "../reducers";

const middlewares = [thunk];

function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require("../reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

const store = configureStore();

export default store;
