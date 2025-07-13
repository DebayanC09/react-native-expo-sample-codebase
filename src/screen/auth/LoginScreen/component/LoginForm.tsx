import {View} from "react-native";

import {Control} from "react-hook-form";

import {FormTextInput} from "@/component";

import {LoginFormSchema} from "../schema";
import {LoginScreenStyle} from "../style";

export type LoginFormProps = {
  control: Control<LoginFormSchema>;
};

export const LoginForm = ({control}: LoginFormProps) => {
  return (
    <View style={LoginScreenStyle.container}>
      <FormTextInput control={control} name="email" placeholder="Email" />
      <FormTextInput control={control} name="password" placeholder="Password" />
    </View>
  );
};
