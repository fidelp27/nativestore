import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Contact from "../views/contact/contact";
import CartNavigator from "./cartNavigation";
import ShopNavigator from "./shopNavigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const TabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#000",
        activeBackgroundColor: "#feb72b",
        inactiveTintColor: "#FFF",
        inactiveBackgroundColor: "#527318",
      }}
    >
      <Tab.Screen
        name="ShopNavigator"
        component={ShopNavigator}
        options={{
          tabBarLabel: "Store",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="rocket" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="email" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
