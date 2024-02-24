import { StyleSheet } from "react-native";
import { colors, dimensions, font } from "../../../constants/styles";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: font.size.md,
  },
  container: {
    gap: 5,
  },
  inputContainer: {
    width: "100%",
    position: "relative",
    borderWidth: 2,
    borderColor: colors.mainBrand,
    borderRadius: dimensions.radius.s,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    position: "absolute",
    fontSize: font.size.md,
    color: colors.gray["500"],
    backgroundColor: colors.white,
    paddingHorizontal: 4,
    margin: 8,
  },
  error: {
    paddingLeft: 8,
    color: colors.error,
  },
});
