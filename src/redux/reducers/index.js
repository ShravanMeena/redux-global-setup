import { combineReducers } from "redux";
import Theme from "./Theme";
import Auth from "./Auth";
import Constants from "./Constants";
import Loader from "./Loader";

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  constants: Constants,
  loader: Loader,
});

export default reducers;
