import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  Text,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../../constants/styles";

import Wrapper from "../../../components/Wrapper";
import Input from "../../../components/Input";

import { useAuth } from "../../../hooks/useAuth";

import { styles } from "./styles";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const { login } = useAuth();
  return (
    <Wrapper backgroundColor={colors.mainBrand} justifyContent="center">
      <SafeAreaView />
      <Text style={styles.title}>Login</Text>
      <View style={styles.container}>
        <Input placeholder="User" value={user} onChangeText={setUser} />
        <Input placeholder="Password" />
        <TouchableOpacity onPress={() => console.log(user)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
}
