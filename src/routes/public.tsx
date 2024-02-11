import { createStackNavigator } from "@react-navigation/stack";
import { PUBLIC } from "../constants/screens";
import Login from "../pages/public/Login";
import Welcome from "../pages/public/Welcome";

const Stack = createStackNavigator();

export default function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={PUBLIC.WELCOME}
    >
      <Stack.Screen name={PUBLIC.WELCOME} component={Welcome} />
      <Stack.Screen name={PUBLIC.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}
