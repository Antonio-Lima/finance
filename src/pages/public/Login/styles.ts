import { StyleSheet } from "react-native";

import { colors, dimensions } from "../../../constants/styles";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.mainBrand,
  },
  title: {
    color: colors.white,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 50,
  },
  container: {
    padding: 20,
    marginTop: 50,
    width: "100%",
    gap: 20,
    borderRadius: dimensions.radius.s,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
