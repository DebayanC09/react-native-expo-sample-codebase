import {NavigationContainer} from "@react-navigation/native";

import {AuthNavigation} from "./navigator";

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
