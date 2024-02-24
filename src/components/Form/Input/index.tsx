import { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Control, Controller } from "react-hook-form";
import { MotiText } from "moti";

import { styles } from "./styles";

interface InputProps extends TextInputProps {
  control: Control<any>;
  name: string;
}

export default function Input(props: InputProps) {
  const { control, name, placeholder, ...rest } = props;
  const [focus, setFocus] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
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
            onBlur={() => {
              setFocus(Boolean(value));
              onBlur();
            }}
            value={value}
            onChangeText={onChange}
            {...rest}
          />
        </View>
      )}
    />
  );
}
