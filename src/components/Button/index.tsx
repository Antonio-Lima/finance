import { Text, TouchableWithoutFeedbackProps } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline" | "outline-blue";
  onPress: () => void;
}

export default function Button(props: ButtonProps) {
  const { label, variant = "primary", onPress, ...rest } = props;
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={[styles.label, styles[`label-${variant}`]]}>{label}</Text>
    </TouchableOpacity>
  );
}
