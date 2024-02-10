import { Text, View, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../../constants/styles";

import Wrapper from "../../../components/Wrapper";

import { useAuth } from "../../../hooks/useAuth";

import { styles } from "./styles";

export default function Login() {
  const { login } = useAuth();
  return (
    <Wrapper backgroundColor={colors.mainBrand}>
      <MaterialCommunityIcons name="finance" size={80} color={"white"} />
      <TouchableOpacity onPress={login} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </Wrapper>
  );
}
