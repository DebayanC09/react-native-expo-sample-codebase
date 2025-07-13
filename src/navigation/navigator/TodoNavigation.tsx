import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import {AddUpdateTodoScreen, TodoListScreen} from "@/screen/todo";

type TodoStackParamList = {
  TodoListScreen: undefined;
  AddUpdateTodoScreen: undefined;
};

const Stack = createNativeStackNavigator<TodoStackParamList>();

export const useTodoNavigation = () =>
  useNavigation<NativeStackNavigationProp<TodoStackParamList>>();

export const useTodoStackRoute = (): RouteProp<TodoStackParamList> => {
  return useRoute<RouteProp<TodoStackParamList>>();
};

export const TodoNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="TodoListScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TodoListScreen" component={TodoListScreen} />
      <Stack.Screen
        name="AddUpdateTodoScreen"
        component={AddUpdateTodoScreen}
      />
    </Stack.Navigator>
  );
};
