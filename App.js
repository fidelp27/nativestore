import Home from "./src/views/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Store from "./src/views/store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Bienvenido" }}
        />
        <Stack.Screen name="Store" component={Store} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
