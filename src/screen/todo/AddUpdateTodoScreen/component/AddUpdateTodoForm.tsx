import {View} from "react-native";

import {Control} from "react-hook-form";

import {FormTextInput} from "@/component";

import {TodoFormSchema} from "../schema";
import {AddUpdateTodoScreenStyle} from "../style";

export type AddUpdateTodoFormProps = {
  control: Control<TodoFormSchema>;
};

export const AddUpdateTodoForm = ({control}: AddUpdateTodoFormProps) => {
  return (
    <View style={AddUpdateTodoScreenStyle.formContainer}>
      <FormTextInput control={control} name="title" placeholder="Title" />
      <FormTextInput
        control={control}
        name="description"
        placeholder="Description"
      />
      <FormTextInput
        control={control}
        name="dateTime"
        placeholder="Date Time"
      />
      <FormTextInput
        control={control}
        name="priority"
        placeholder="Priority"
        inputMode="text"
      />
    </View>
  );
};
