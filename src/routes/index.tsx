import { NavigationContainer } from "@react-navigation/native";
import PublicRoutes from "./public";
import PrivateRoutes from "./private";
import { useAuth } from "../hooks/useAuth";

export default function Routes() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}
