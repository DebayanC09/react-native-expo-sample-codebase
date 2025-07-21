import {NavigationContainer} from "@react-navigation/native";

import {useAuthStore} from "@/store";

import {AuthNavigation, TodoNavigation} from "./navigator";

const Navigation = () => {
  const {isLoggedIn} = useAuthStore();

  return (
    <NavigationContainer>
      {isLoggedIn ? <TodoNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;
