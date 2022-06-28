import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../views/cart";

const CartNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="cart" component={Cart} />
    </Stack.Navigator>
  );
};
export default CartNavigator;
