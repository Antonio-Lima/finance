import { Text, View } from "react-native";
import { MotiView } from "moti";

import Wrapper from "../../../components/Wrapper";
import Button from "../../../components/Button";

import { colors } from "../../../constants/styles";

import App from "../../../assets/images/app.svg";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <Wrapper backgroundColor={colors.mainBrand}>
      <MotiView
        style={styles.main}
        from={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "timing",
          duration: 1000,
        }}
      >
        <App height={250} />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>to your finance app</Text>
        <View style={styles.container}>
          <Button
            label="Login"
            variant="primary"
            onPress={() => navigation.navigate("login")}
          />
          <Button
            label="Register"
            variant="outline-blue"
            onPress={() => console.log("Register")}
          />
        </View>
        <MotiView style={styles.background} />
      </MotiView>
    </Wrapper>
  );
}
