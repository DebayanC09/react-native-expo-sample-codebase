import {Pressable, Text} from "react-native";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Button, KeyboardAvoidingScrollView} from "@/component";
import {BaseScreen} from "@/core/base";
import {LoginRequest} from "@/model/auth";
import {useLoginQuery} from "@/query";

import {LoginForm} from "./component";
import {LoginFormSchema, LoginSchema} from "./schema";
import {LoginScreenStyle} from "./style";

const LoginScreen = () => {
  const {control, handleSubmit} = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const {callLogin, isLoginLoading} = useLoginQuery();

  const onSubmit = (data: LoginFormSchema) => {
    callLogin(
      {
        email: data.email,
        password: data.password,
      } satisfies LoginRequest,
      {
        onSuccess: data => {
          console.log(data);
        },
        onError: error => {
          console.log(error);
        },
      },
    );
  };

  return (
    <BaseScreen
      appBarProps={{
        title: "Login",
      }}>
      <KeyboardAvoidingScrollView
        contentContainerStyle={LoginScreenStyle.scrollContainer}>
        <LoginForm control={control} />

        <Button
          title="Login"
          onPress={handleSubmit(onSubmit)}
          showLoader={isLoginLoading}
        />
        <Pressable onPress={() => {}}>
          <Text style={LoginScreenStyle.registerButton}>Register</Text>
        </Pressable>
      </KeyboardAvoidingScrollView>
    </BaseScreen>
  );
};

export default LoginScreen;
