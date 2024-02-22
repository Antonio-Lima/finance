import { StyleSheet } from "react-native";
import { colors, dimensions, font } from "../../constants/styles";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    fontSize: font.size.md,
  },
  container: {
    width: "100%",
    position: "relative",
    borderWidth: 2,
    borderColor: colors.mainBrand,
    borderRadius: dimensions.radius.s,
    padding: 8,
  },
  label: {
    position: "absolute",
    fontSize: font.size.md,
    color: colors.gray["500"],
    backgroundColor: colors.white,
    paddingHorizontal: 4,
    margin: 8,
  },
});
