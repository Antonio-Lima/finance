import "react-native-reanimated";
import { AuthProvider } from "./src/hooks/useAuth";
import Routes from "./src/routes";

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
