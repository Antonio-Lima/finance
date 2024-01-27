import { createStackNavigator } from "@react-navigation/stack";
import { PUBLIC } from "../constants/screens";
import Login from "../pages/public/login";

const Stack = createStackNavigator();

export default function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={PUBLIC.LOGIN} component={Login} />
    </Stack.Navigator>
  );
}
