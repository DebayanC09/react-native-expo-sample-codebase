import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

import {AuthStackParamList} from "../type";

export const useAuthNavigation = () =>
  useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

export const useAuthStackRoute = (): RouteProp<AuthStackParamList> => {
  return useRoute<RouteProp<AuthStackParamList>>();
};
