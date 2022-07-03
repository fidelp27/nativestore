import { SELECT_PRODUCT } from "../types/products.types";

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});
