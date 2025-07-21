import {StyleSheet} from "react-native";

export const FormTextInputStyle = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    borderRadius: 5,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    minHeight: 48,

    paddingHorizontal: 12,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
