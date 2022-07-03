import { combineReducers } from "redux";
import productsReducer from "./products.reducer";

const rootReducers = combineReducers({
  product: productsReducer,
});

export default rootReducers;
