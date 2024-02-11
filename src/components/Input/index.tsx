import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

interface InputProps extends TextInputProps {}

export default function Input(props: InputProps) {
  const { placeholder } = props;
  return <TextInput placeholder={placeholder} style={styles.input} />;
}
