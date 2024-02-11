import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styles";

export const styles = StyleSheet.create({
  main: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 40,
    color: colors.mainBrand,
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.mainBrand,
    fontSize: 20,
  },
  container: {
    marginTop: 80,
    width: "90%",
    gap: 20,
  },
  background: {
    position: "absolute",
    width: "200%",
    height: "110%",
    top: "40%",
    backgroundColor: colors.white,
    transform: [{ rotate: "60deg" }],
    zIndex: -1,
  },
});
