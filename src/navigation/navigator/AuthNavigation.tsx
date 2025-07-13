import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {LoginScreen, RegisterScreen} from "@/screen/auth";

import {AuthStackParamList} from "../type/AuthStackParamList";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
