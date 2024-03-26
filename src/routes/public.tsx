import { createStackNavigator } from "@react-navigation/stack";
import { PUBLIC } from "../constants/screens";
import Login from "../pages/public/Login";
import Welcome from "../pages/public/Welcome";
import Splash from "../pages/public/Splash";

const Stack = createStackNavigator();

export default function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={PUBLIC.SPLASH}
    >
      <Stack.Screen name={PUBLIC.SPLASH} component={Splash} />
      <Stack.Screen name={PUBLIC.WELCOME} component={Welcome} />
      <Stack.Screen name={PUBLIC.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}
