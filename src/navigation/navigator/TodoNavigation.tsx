import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {AddUpdateTodoScreen, TodoListScreen} from "@/screen/todo";

import {TodoStackParamList} from "../type/TodoStackParamList";

const Stack = createNativeStackNavigator<TodoStackParamList>();

const TodoNavigation = () => {
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
export default TodoNavigation;
