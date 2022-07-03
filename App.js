import AppNavigator from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
