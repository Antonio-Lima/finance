import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";
import { MotiText } from "moti";
import { useState } from "react";

interface InputProps extends TextInputProps {}

export default function Input(props: InputProps) {
  const { value, placeholder, ...rest } = props;
  const [focus, setFocus] = useState(Boolean(value));
  return (
    <View style={styles.container}>
      <MotiText
        style={styles.label}
        animate={{
          translateY: focus ? -20 : 0,
        }}
        transition={{ type: "timing" }}
      >
        {placeholder}
      </MotiText>
      <TextInput
        style={styles.input}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(Boolean(value))}
        value={value}
        {...rest}
      />
    </View>
  );
}
