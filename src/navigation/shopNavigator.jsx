import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StoreShop from "../views/storeShop";
import ProductDetail from "../components/products/productDetail";
import Home from "../views/home";
import { Platform } from "react-native";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();
  const isIos = Platform === "ios";

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Store" component={StoreShop} />
      <Stack.Screen
        name="productDetail"
        component={ProductDetail}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};
export default ShopNavigator;
