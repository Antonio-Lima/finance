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

export default function Login() {
  const { login } = useAuth();
  return (
    <Wrapper backgroundColor={colors.mainBrand} justifyContent="flex-start">
      <SafeAreaView />
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.container}>
        <Input placeholder="User" />
        <Input placeholder="Password" />
      </View>
    </Wrapper>
  );
}
