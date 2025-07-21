import {useEffect} from "react";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";

import {Button, KeyboardAvoidingScrollView} from "@/component";
import {BaseScreen} from "@/core/base";
import {TodoModel} from "@/model/todo";
import {useTodoNavigation, useTodoStackRoute} from "@/navigation/hooks";
import {
  useAddTodoMutation,
  useTodoDetailsQuery,
  useUpdateTodoMutation,
} from "@/query";
import {showToast} from "@/utils";

import {AddUpdateTodoScreenParams, TodoType} from "../type";

import {AddUpdateTodoForm} from "./component";
import {TodoFormSchema, TodoSchema} from "./schema";
import {AddUpdateTodoScreenStyle} from "./style";

const AddUpdateTodoScreen = () => {
  const navigation = useTodoNavigation();
  const {params} = useTodoStackRoute();
  const {type, todoId} = params as AddUpdateTodoScreenParams;

  const {isTodoDetailsLoading, todoDetailsData} = useTodoDetailsQuery(
    todoId,
    type === TodoType.UPDATE && !!todoId,
  );

  const {control, handleSubmit, setValue} = useForm<TodoFormSchema>({
    resolver: zodResolver(TodoSchema),
  });

  const {callAddTodo, isAddTodoLoading} = useAddTodoMutation();
  const {callUpdateTodo, isUpdateTodoLoading} = useUpdateTodoMutation();

  const onSubmit = (data: TodoFormSchema) => {
    if (type === TodoType.UPDATE) {
      callUpdateTodo(
        {
          _id: todoId,
          title: data.title,
          description: data.description,
          dateTime: data.dateTime,
          priority: data.priority,
        } satisfies TodoModel,
        {
          onSuccess: response => {
            showToast(response.message);
            navigation.goBack();
          },
          onError: error => {
            showToast(error.message);
          },
        },
      );
    } else {
      callAddTodo(
        {
          title: data.title,
          description: data.description,
          dateTime: data.dateTime,
          priority: data.priority,
        } satisfies TodoModel,
        {
          onSuccess: response => {
            showToast(response.message);
            navigation.goBack();
          },
          onError: error => {
            showToast(error.message);
          },
        },
      );
    }
  };

  useEffect(() => {
    if (type === TodoType.UPDATE && todoDetailsData) {
      setValue("title", todoDetailsData.data.title);
      setValue("description", todoDetailsData.data.description);
      setValue("dateTime", todoDetailsData.data.dateTime);
      setValue("priority", todoDetailsData.data.priority);
    }
  }, [setValue, todoDetailsData, type]);

  return (
    <BaseScreen
      showLoader={isTodoDetailsLoading}
      appBarProps={{
        title: type === TodoType.ADD ? "Add Todo" : "Update Todo",
        showBack: true,
      }}>
      <KeyboardAvoidingScrollView
        contentContainerStyle={AddUpdateTodoScreenStyle.scrollContainer}>
        <AddUpdateTodoForm control={control} />

        <Button
          showLoader={isAddTodoLoading || isUpdateTodoLoading}
          title={type === TodoType.ADD ? "Add" : "Update"}
          onPress={handleSubmit(onSubmit)}
        />
      </KeyboardAvoidingScrollView>
    </BaseScreen>
  );
};

export default AddUpdateTodoScreen;
