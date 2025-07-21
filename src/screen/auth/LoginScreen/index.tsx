import {Pressable, Text} from "react-native";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Button, KeyboardAvoidingScrollView} from "@/component";
import {BaseScreen} from "@/core/base";
import {LoginRequest} from "@/model/auth";
import {useLoginMutation} from "@/query";
import {useAuthStore} from "@/store";
import {showToast} from "@/utils";

import {LoginForm} from "./component";
import {LoginFormSchema, LoginSchema} from "./schema";
import {LoginScreenStyle} from "./style";

const LoginScreen = () => {
  const {setIsLoggedIn, setAccessToken} = useAuthStore();
  const {control, handleSubmit} = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const {callLogin, isLoginLoading} = useLoginMutation();

  const onSubmit = (data: LoginFormSchema) => {
    callLogin(
      {
        email: data.email,
        password: data.password,
      } satisfies LoginRequest,
      {
        onSuccess: data => {
          console.log(data);
          if (data.status === 1 && data.user.token) {
            setIsLoggedIn(true);
            setAccessToken(data.user.token);
            showToast(data.message);
          } else {
            showToast(data.message);
          }
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
