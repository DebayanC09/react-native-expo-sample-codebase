import {Text} from "react-native";

import {BaseScreen} from "@/core/base";

const RegisterScreen = () => {
  return (
    <BaseScreen appBarProps={{showBack: true, title: "Register"}}>
      <Text>Register</Text>
    </BaseScreen>
  );
};

export default RegisterScreen;
