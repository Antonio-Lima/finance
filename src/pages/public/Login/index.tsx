import {
  View,
  SafeAreaView,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "../../../components/Form/Input";

import { useAuth } from "../../../hooks/useAuth";

import { styles } from "./styles";
import { LoginSchema } from "../../../schemas/login";
import Button from "../../../components/Form/Button";
import useStorage from "../../../hooks/useStorage";
import { DEFAULT_TOKEN } from "../../../constants";

type LoginFormData = zod.infer<typeof LoginSchema>;

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [userToken, setUserToken] = useStorage("token");

  const { login } = useAuth();

  function onSubmit(form: LoginFormData) {
    if (form.username === "antonio" && form.password === "123456") {
      setUserToken(DEFAULT_TOKEN);
      login();
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <SafeAreaView />
      <Text style={styles.title}>Login</Text>
      <View style={styles.container}>
        <Input
          control={control}
          name="username"
          placeholder="User"
          error={errors.username?.message}
        />
        <Input
          control={control}
          name="password"
          password={true}
          placeholder="Password"
          error={errors.password?.message}
        />
        <Button
          label="Login"
          variant="primary"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
