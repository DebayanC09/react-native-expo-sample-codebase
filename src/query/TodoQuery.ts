import {useMutation, useQuery} from "@tanstack/react-query";

import {
  AddUpdateTodoResponse,
  DeleteTodoRequest,
  DeleteTodoResponse,
  TodoDetailsResponse,
  TodoModel,
} from "@/model/todo";
import {
  addTodo,
  deleteTodo,
  todoDetails,
  todoList,
  updateTodo,
} from "@/service/network/api/TodoService";

export const useTodoListQuery = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ["todoList"],
    queryFn: async () => await todoList(),
  });
  return {
    todoListData: data,
    isTodoListLoading: isLoading,
    todoListError: error,
  };
};

export const useTodoDetailsQuery = (
  id: string | undefined,
  enabled: boolean,
) => {
  const {data, isLoading, error} = useQuery<TodoDetailsResponse>({
    queryKey: ["todoDetails", id],
    queryFn: async () => await todoDetails(id),
    enabled: enabled,
  });
  return {
    todoDetailsData: data,
    isTodoDetailsLoading: isLoading,
    todoDetailsError: error,
  };
};

export const useAddTodoMutation = () => {
  const {mutate, isPending, data, error} = useMutation<
    AddUpdateTodoResponse,
    Error,
    TodoModel
  >({
    mutationFn: (request: TodoModel) => addTodo(request),
  });
  return {
    callAddTodo: mutate,
    isAddTodoLoading: isPending,
    addTodoData: data,
    addTodoError: error,
  };
};

export const useUpdateTodoMutation = () => {
  const {mutate, isPending, data, error} = useMutation<
    AddUpdateTodoResponse,
    Error,
    TodoModel
  >({
    mutationFn: (request: TodoModel) => updateTodo(request),
  });
  return {
    callUpdateTodo: mutate,
    isUpdateTodoLoading: isPending,
    updateTodoData: data,
    updateTodoError: error,
  };
};

export const useDeleteTodoMutation = () => {
  const {mutate, isPending, data, error} = useMutation<
    DeleteTodoResponse,
    Error,
    DeleteTodoRequest
  >({
    mutationFn: (request: DeleteTodoRequest) => deleteTodo(request),
  });
  return {
    callDeleteTodo: mutate,
    isDeleteTodoLoading: isPending,
    deleteTodoData: data,
    deleteTodoError: error,
  };
};
