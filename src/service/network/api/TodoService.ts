import {
  AddUpdateTodoResponse,
  DeleteTodoRequest,
  DeleteTodoResponse,
  TodoDetailsResponse,
  TodoListResponse,
  TodoModel,
} from "@/model/todo";

import {ApiClient} from "../ApiClient";
import {ApiEndPoints} from "../ApiEndPoints";

export const todoList = async (): Promise<TodoListResponse> => {
  const response = await ApiClient.get(
    ApiEndPoints.todoList,
  ).json<TodoListResponse>();
  return response;
};

export const todoDetails = async (
  id: string | undefined,
): Promise<TodoDetailsResponse> => {
  const response = await ApiClient.get(
    `${ApiEndPoints.todoDetails}/${id}`,
  ).json<TodoDetailsResponse>();
  return response;
};

export const addTodo = async (
  request: TodoModel,
): Promise<AddUpdateTodoResponse> => {
  const response = await ApiClient.post(ApiEndPoints.addTodo, {
    json: {
      title: request.title,
      description: request.description,
      dateTime: request.dateTime,
      priority: request.priority,
    },
  }).json<AddUpdateTodoResponse>();
  return response;
};

export const updateTodo = async (
  request: TodoModel,
): Promise<AddUpdateTodoResponse> => {
  const response = await ApiClient.post(ApiEndPoints.updateTodo, {
    json: {
      todoId: request._id,
      title: request.title,
      description: request.description,
      dateTime: request.dateTime,
      priority: request.priority,
    },
  }).json<AddUpdateTodoResponse>();
  return response;
};

export const deleteTodo = async (
  request: DeleteTodoRequest,
): Promise<DeleteTodoResponse> => {
  const response = await ApiClient.post(ApiEndPoints.deleteTodo, {
    json: {
      todoId: request.todoId,
    },
  }).json<DeleteTodoResponse>();
  return response;
};
