import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 10,

    borderWidth: 1,
    borderColor: "#000",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
