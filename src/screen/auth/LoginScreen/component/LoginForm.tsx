import {useState} from "react";

import {Pressable, View} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import {Control} from "react-hook-form";

import {FormTextInput} from "@/component";

import {LoginFormSchema} from "../schema";
import {LoginScreenStyle} from "../style";

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
    <View style={LoginScreenStyle.container}>
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
        inputWrapperStyle={LoginScreenStyle.passwordContainer}
        rightView={passwordRightView()}
      />
    </View>
  );
};
