import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

import {TodoStackParamList} from "../type/TodoStackParamList";

export const useTodoNavigation = () =>
  useNavigation<NativeStackNavigationProp<TodoStackParamList>>();

export const useTodoStackRoute = (): RouteProp<TodoStackParamList> => {
  return useRoute<RouteProp<TodoStackParamList>>();
};
