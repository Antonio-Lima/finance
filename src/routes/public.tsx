import { createStackNavigator } from "@react-navigation/stack";
import { PUBLIC } from "../constants/screens";
import Login from "../pages/public/Login/login";

const Stack = createStackNavigator();

export default function PublicRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={PUBLIC.LOGIN}
    >
      <Stack.Screen name={PUBLIC.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}
