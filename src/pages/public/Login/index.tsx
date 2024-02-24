import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  SafeAreaView,
  Text,
} from "react-native";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { colors } from "../../../constants/styles";

import Wrapper from "../../../components/Wrapper";
import Input from "../../../components/Form/Input";

import { useAuth } from "../../../hooks/useAuth";

import { styles } from "./styles";
import { LoginSchema } from "../../../schemas/login";
import Button from "../../../components/Form/Button";

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

  const { login } = useAuth();

  function onSubmit(form: LoginFormData) {
    console.log(form);
  }

  return (
    <Wrapper backgroundColor={colors.mainBrand} justifyContent="center">
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
    </Wrapper>
  );
}
