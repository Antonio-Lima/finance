import { createStackNavigator } from "@react-navigation/stack";

import { PRIVATE } from "../constants/screens";

import Home from "../pages/private/Home";

const Stack = createStackNavigator();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PRIVATE.HOME} component={Home} />
    </Stack.Navigator>
  );
}
