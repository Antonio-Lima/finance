import { Text, View } from "react-native";
import { MotiView } from "moti";

import Wrapper from "../../../components/Wrapper";
import Button from "../../../components/Form/Button";

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
        from={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          type: "timing",
          duration: 1000,
        }}
      >
        <App height={250} />
        <MotiView
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          from={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            type: "timing",
            duration: 1000,
            delay: 500,
          }}
        >
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
        </MotiView>
        <MotiView
          style={styles.background}
          from={{
            opacity: 0,
            translateY: 100,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            transform: [{ rotate: "60deg" }],
          }}
          transition={{
            type: "timing",
            delay: 250,
            duration: 1000,
          }}
        />
      </MotiView>
    </Wrapper>
  );
}
