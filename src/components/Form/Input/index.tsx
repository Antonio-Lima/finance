import { useState } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Control, Controller } from "react-hook-form";
import { MotiText } from "moti";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "../../../constants/styles";

interface InputProps extends TextInputProps {
  control: Control<any>;
  name: string;
  password?: boolean;
  error?: string;
}

export default function Input(props: InputProps) {
  const {
    control,
    name,
    error = "",
    password = false,
    placeholder,
    ...rest
  } = props;
  const [hidePassword, setHidePassword] = useState(password);
  const [focus, setFocus] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <MotiText
              style={styles.label}
              animate={{
                translateY: focus || Boolean(value) ? -20 : 0,
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
              secureTextEntry={hidePassword}
              onChangeText={onChange}
              {...rest}
            />
            {password && (
              <TouchableOpacity onPress={() => setHidePassword((cur) => !cur)}>
                <MaterialIcons
                  name={!hidePassword ? "visibility" : "visibility-off"}
                  size={24}
                  color={colors.gray["500"]}
                />
              </TouchableOpacity>
            )}
          </View>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      )}
    />
  );
}
