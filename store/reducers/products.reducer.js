import { products } from "../../data/data";
import { SELECT_PRODUCT } from "../types/products.types";

const initialState = {
  products,
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find(
          (product) => product.id === action.productId
        ),
      };

    default:
      return state;
  }
};
export default productsReducer;
