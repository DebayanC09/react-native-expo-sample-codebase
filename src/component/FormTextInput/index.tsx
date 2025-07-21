import React, {useState} from "react";

import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

import {Control, Controller, FieldValues, Path} from "react-hook-form";

import useAppTheme from "@/core/theme";

import {FormTextInputStyle} from "./style";

export type FormTextInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  leftView?: React.ReactNode;
  rightView?: React.ReactNode;
} & Omit<TextInputProps, "value">;

const FormTextInput = <T extends FieldValues>({
  control,
  name,
  onChangeText,
  onFocus,
  onBlur,
  inputWrapperStyle,
  inputStyle,
  leftView,
  rightView,
  ...rest
}: FormTextInputProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);
  const {textInput} = useAppTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: {
          onChange: controlOnChange,
          onBlur: controlOnBlur,
          value: controlValue,
        },
        fieldState: {error},
      }) => {
        let borderColor = textInput.borderColor;
        if (error) {
          borderColor = textInput.errorBorderColor;
        } else if (isFocused) {
          borderColor = textInput.activeBorderColor;
        }

        return (
          <View>
            <View
              style={[
                FormTextInputStyle.inputWrapper,
                {borderColor},
                {backgroundColor: textInput.backgroundColor},
                inputWrapperStyle,
              ]}>
              <View style={FormTextInputStyle.inputContainer}>
                {leftView}
                <TextInput
                  value={controlValue}
                  placeholderTextColor={textInput.placeholderTextColor}
                  onChangeText={value => {
                    controlOnChange(value);
                    onChangeText?.(value);
                  }}
                  onBlur={value => {
                    setIsFocused(false);
                    controlOnBlur();
                    onBlur?.(value);
                  }}
                  onFocus={value => {
                    setIsFocused(true);
                    onFocus?.(value);
                  }}
                  style={[
                    FormTextInputStyle.input,
                    {
                      color: textInput.textColor,
                    },
                    inputStyle,
                  ]}
                  {...rest}
                />
                {rightView}
              </View>
            </View>
            {error && (
              <Text style={{color: textInput.errorBorderColor}}>
                {error.message}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
};

export default FormTextInput;
