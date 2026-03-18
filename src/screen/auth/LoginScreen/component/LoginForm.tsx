import {useState} from "react";

import {Pressable, StyleSheet, View} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import {Control} from "react-hook-form";

import {FormTextInput} from "@/component";

import {LoginFormSchema} from "../schema";

export type LoginFormProps = {
  control: Control<LoginFormSchema>;
};

export const LoginForm = ({control}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const passwordRightView = () => {
    return (
      <Pressable
        onPress={() => {
          setShowPassword(prev => !prev);
        }}>
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="black"
        />
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FormTextInput
        control={control}
        name="email"
        placeholder="Email"
        inputMode="email"
        autoCapitalize="none"
      />
      <FormTextInput
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry={!showPassword}
        inputWrapperStyle={styles.passwordContainer}
        rightView={passwordRightView()}
      />
    </View>
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
