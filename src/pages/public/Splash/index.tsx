import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Wrapper from "../../../components/Wrapper";

import useStorage from "../../../hooks/useStorage";

import { colors } from "../../../constants/styles";
import { useAuth } from "../../../hooks/useAuth";

export default function Splash() {
  const [authToken, setAuthToken] = useStorage<string>("token");
  const { login } = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    if (authToken) login();
    else navigation.navigate("welcome");
  }, [authToken]);
  return (
    <Wrapper backgroundColor={colors.mainBrand}>
      <MotiView
        from={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ loop: true, duration: 1000, type: "timing" }}
      >
        <MaterialCommunityIcons name="finance" size={102} color="white" />
      </MotiView>
    </Wrapper>
  );
}
