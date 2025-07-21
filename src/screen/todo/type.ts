export enum TodoType {
  ADD = "add",
  UPDATE = "update",
}

export type AddUpdateTodoScreenParams = {
  todoId?: string;
  type: TodoType;
};
