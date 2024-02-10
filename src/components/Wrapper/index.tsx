import { ReactNode } from "react";
import { ColorValue, View } from "react-native";
import { colors } from "../../constants/styles";

interface WrapperProps {
  children: ReactNode;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "baseline" | "center" | "stretch";
  backgroundColor?: ColorValue;
}

export default function Wrapper(props: WrapperProps) {
  const {
    children,
    justifyContent = "center",
    alignItems = "center",
    backgroundColor = colors.white,
  } = props;
  return (
    <View
      style={{
        alignItems,
        justifyContent,
        flex: 1,
        backgroundColor,
      }}
    >
      {children}
    </View>
  );
}
