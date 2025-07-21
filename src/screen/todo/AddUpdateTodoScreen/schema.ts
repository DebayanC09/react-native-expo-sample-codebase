import {z} from "zod";

export const TodoSchema = z.object({
  title: z
    .string({required_error: "Title is required"})
    .min(1, "Title cannot be empty"),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, "Description cannot be empty"),
  dateTime: z
    .string({
      required_error: "Due Date is required",
    })
    .min(1, "Due Date cannot be empty"),
  priority: z
    .string({required_error: "Priority is required"})
    .min(1, "Priority cannot be empty"),
});

export type TodoFormSchema = z.infer<typeof TodoSchema>;
