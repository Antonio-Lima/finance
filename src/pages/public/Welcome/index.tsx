import Wrapper from "../../../components/Wrapper";
import { colors } from "../../../constants/styles";

import App from "../../../assets/images/app.svg";
import { Text } from "react-native";
import { styles } from "./styles";

export default function Welcome() {
  return (
    <Wrapper backgroundColor={colors.mainBrand}>
      <App
        height="200"
        style={{
          marginTop: 40,
        }}
      />
      <Text style={styles.title}>Welcome</Text>
    </Wrapper>
  );
}
