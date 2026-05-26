import {Pressable, StyleSheet} from "react-native";

import {zodResolver} from "@hookform/resolvers/zod";
import {useRouter} from "expo-router";
import {useForm} from "react-hook-form";

import {AppButton, AppText, KeyboardAvoidingScrollView} from "@/component";
import {BaseScreen} from "@/core/base";
import {LoginRequest} from "@/model/auth";
import {useLoginMutation} from "@/query";
import {useAuthStore} from "@/store";
import {showToast} from "@/utils";

import {LoginForm} from "./component";
import {LoginFormSchema, LoginSchema} from "./schema";

const LoginScreen = () => {
  const router = useRouter();
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
            router.replace("/(todo)");
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
        contentContainerStyle={styles.scrollContainer}>
        <LoginForm control={control} />

        <AppButton
          title="Login"
          onPress={handleSubmit(onSubmit)}
          showLoader={isLoginLoading}
        />
        <Pressable onPress={() => router.push("/(auth)/register")}>
          <AppText style={styles.registerButton}>Register</AppText>
        </Pressable>
      </KeyboardAvoidingScrollView>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    width: "100%",
  },
  registerButton: {
    textDecorationLine: "underline",
  },
  loadingContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 16,
  },
  passwordContainer: {
    paddingEnd: 16,
  },
});

export default LoginScreen;
