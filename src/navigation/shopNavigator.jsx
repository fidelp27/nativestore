import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Store from "../views/store";
import ProductDetail from "../components/products/productDetail";
import Home from "../views/home";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="productDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};
export default ShopNavigator;
