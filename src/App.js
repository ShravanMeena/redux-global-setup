import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReduxTest from "./view/ReduxTest";
function App() {
  return (
    <Provider store={store}>
      <ReduxTest />
    </Provider>
  );
}

export default App;
