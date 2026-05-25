import {AppText} from "@/component";
import {BaseScreen} from "@/core/base";

const RegisterScreen = () => {
  return (
    <BaseScreen appBarProps={{showBack: true, title: "Register"}}>
      <AppText>Register</AppText>
    </BaseScreen>
  );
};

export default RegisterScreen;
