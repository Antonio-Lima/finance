import { StyleSheet } from "react-native";
import { colors } from "../../../constants/styles";

export const styles = StyleSheet.create({
  button: {
    minWidth: "100%",
    borderRadius: 99,
    borderWidth: 2,
    alignItems: "center",
    paddingVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  primary: {
    backgroundColor: colors.mainBrand,
    color: colors.white,
    borderColor: colors.mainBrand,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    color: colors.mainBrand,
  },
  outline: {
    borderColor: colors.white,
  },
  "outline-blue": {
    borderColor: colors.mainBrand,
  },
  "label-primary": {
    color: colors.white,
  },
  "label-secondary": {
    color: colors.mainBrand,
  },
  "label-outline": {
    color: colors.white,
  },
  "label-outline-blue": {
    color: colors.mainBrand,
  },
});
